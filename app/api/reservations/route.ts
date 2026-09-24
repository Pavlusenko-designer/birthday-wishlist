import { database } from '@/db/raw';
import { products, groupKey } from '@/lib/products';
const cookieName = 'wishlist_guest';
const pagesOrigin = 'https://pavlusenko-designer.github.io';
const tokenPattern = /^[a-f0-9]{64}$/;
function allowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  const url = new URL(request.url);
  if (origin === url.origin || origin === pagesOrigin) return true;
  return ['localhost', '127.0.0.1'].includes(url.hostname) && ['http://127.0.0.1:4173', 'http://localhost:4173'].includes(origin || '');
}
function cors(request: Request, response: Response) {
  const origin = request.headers.get('origin');
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('Vary', 'Origin');
  if (origin && allowedOrigin(request)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  return response;
}
const json = (request: Request, value: unknown, status = 200) => cors(request, Response.json(value, { status }));
async function hash(value: string) {
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))).map(v => v.toString(16).padStart(2, '0')).join('');
}
function guest(request: Request) {
  const bearer = request.headers.get('authorization')?.match(/^Bearer ([a-f0-9]{64})$/)?.[1];
  if (bearer) return bearer;
  // Cross-origin clients authenticate explicitly; third-party cookies are never required.
  if (request.headers.get('origin') && request.headers.get('origin') !== new URL(request.url).origin) return null;
  const value = request.headers.get('cookie')?.split(';').map(v => v.trim()).find(v => v.startsWith(cookieName + '='))?.slice(cookieName.length + 1);
  return value && tokenPattern.test(value) ? value : null;
}
function secret() { return Array.from(crypto.getRandomValues(new Uint8Array(32))).map(v => v.toString(16).padStart(2, '0')).join(''); }
async function readBody(request: Request) {
  const body = await request.json() as { itemId?: unknown; cancelToken?: unknown };
  if (!body || typeof body !== 'object' || typeof body.itemId !== 'string') throw new Error('invalid body');
  return body;
}
export async function OPTIONS(request: Request) {
  return allowedOrigin(request) ? cors(request, new Response(null, { status: 204 })) : json(request, { error: 'Неприпустимий запит.' }, 403);
}
export async function GET(request: Request) {
  if (request.headers.has('origin') && !allowedOrigin(request)) return json(request, { error: 'Неприпустимий запит.' }, 403);
  try {
    const isCrossOrigin = request.headers.has('origin') && request.headers.get('origin') !== new URL(request.url).origin;
    const existing = guest(request);
    if (isCrossOrigin && !existing) return json(request, { error: 'Оновіть сторінку, щоб підключитися до бронювань.' }, 401);
    const token = existing || secret();
    const owner = await hash(token);
    const result = await database().prepare('SELECT group_key,item_id,owner_hash FROM reservations').all<{ group_key: string; item_id: string; owner_hash: string }>();
    const response = json(request, { reservations: result.results.map(row => ({ groupKey: row.group_key === 'tea' ? row.item_id : row.group_key, itemId: row.item_id, mine: row.owner_hash === owner })) });
    if (!existing && !isCrossOrigin) response.headers.set('Set-Cookie', `${cookieName}=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=31536000${new URL(request.url).protocol === 'https:' ? '; Secure' : ''}`);
    return response;
  } catch (error) { console.error('reservation load', error); return json(request, { error: 'Не вдалося завантажити бронювання. Спробуйте ще раз.' }, 503); }
}
export async function POST(request: Request) {
  let body;
  try { body = await readBody(request); } catch { return json(request, { error: 'Неприпустимі дані.' }, 400); }
  if (!allowedOrigin(request)) return json(request, { error: 'Неприпустимий запит.' }, 403);
  const token = guest(request);
  if (!token) return json(request, { error: 'Дозвольте збереження даних і оновіть сторінку, щоб забронювати подарунок.' }, 401);
  const product = products.find(p => p.id === body.itemId);
  if (!product) return json(request, { error: 'Такого подарунка немає у списку.' }, 400);
  try {
    const cancelToken = secret();
    const result = await database().prepare('INSERT INTO reservations (group_key,item_id,owner_hash,cancel_hash,created_at) VALUES (?,?,?,?,?) ON CONFLICT DO NOTHING').bind(groupKey(product), product.id, await hash(token), await hash(cancelToken), new Date().toISOString()).run();
    if (!result.meta.changes) return json(request, { error: 'Цей подарунок або інший варіант із цієї групи вже забронювали. Оберіть інший.' }, 409);
    return json(request, { ok: true, itemId: product.id, cancelToken }, 201);
  } catch (error) { console.error('reservation save', error); return json(request, { error: 'Не вдалося підтвердити бронювання. Оновіть список перед повторною спробою.' }, 503); }
}
export async function DELETE(request: Request) {
  let body;
  try { body = await readBody(request); } catch { return json(request, { error: 'Неприпустимі дані.' }, 400); }
  if (!allowedOrigin(request)) return json(request, { error: 'Неприпустимий запит.' }, 403);
  const product = products.find(p => p.id === body.itemId);
  if (!product) return json(request, { error: 'Подарунок не знайдено.' }, 400);
  const owner = guest(request);
  const recovery = typeof body.cancelToken === 'string' && tokenPattern.test(body.cancelToken) ? body.cancelToken : '';
  if (!owner && !recovery) return json(request, { error: 'Відкрийте сторінку в браузері, де зробили бронювання, або скористайтеся особистим посиланням.' }, 403);
  try {
    const result = await database().prepare('DELETE FROM reservations WHERE item_id=? AND (owner_hash=? OR cancel_hash=?)').bind(product.id, owner ? await hash(owner) : '', recovery ? await hash(recovery) : '').run();
    if (!result.meta.changes) return json(request, { error: 'Бронювання вже скасоване або належить іншій людині.' }, 403);
    return json(request, { ok: true });
  } catch (error) { console.error('reservation cancel', error); return json(request, { error: 'Не вдалося скасувати бронювання. Спробуйте ще раз.' }, 503); }
}
