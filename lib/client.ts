const apiOrigin = process.env.NEXT_PUBLIC_RESERVATION_API || '';
export function assetUrl(path: string) { return (process.env.NEXT_PUBLIC_ASSET_BASE || '/') + path.replace(/^\//, ''); }
function guestToken() {
  const key = 'birthday-wishlist-guest-v1';
  let token = localStorage.getItem(key);
  if (!token || !/^[a-f0-9]{64}$/.test(token)) {
    token = Array.from(crypto.getRandomValues(new Uint8Array(32))).map(v => v.toString(16).padStart(2, '0')).join('');
    localStorage.setItem(key, token);
  }
  return token;
}
export function reservationFetch(init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  if (apiOrigin) {
    try { headers.set('Authorization', `Bearer ${guestToken()}`); }
    catch { throw new Error('Дозвольте збереження даних для цього сайту, щоб бронювати й скасовувати подарунки.'); }
  }
  return fetch(`${apiOrigin}/api/reservations`, { ...init, headers, cache: 'no-store', credentials: apiOrigin ? 'omit' : 'same-origin' });
}
