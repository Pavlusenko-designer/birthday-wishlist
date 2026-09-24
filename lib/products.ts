export type Product={id:string;name:string;subtitle:string;category:"things"|"gaiwan"|"tea"|"music"|"games";price:number|null;url:string;image:string;stock?:string;note?:string;availabilityNote?:string};
export const onePerGroup=true;
export const products:Product[]=[
  {
    "id": "wolf",
    "name": "Футболка «Вовк»",
    "subtitle": "ANIMALISM · ОВЕРСАЙЗ",
    "category": "things",
    "price": 1600,
    "url": "https://animalism.shop/product/futbolka-vovk/",
    "image": "/products/wolf.webp"
  },
  {
    "id": "blanket",
    "name": "Плед «Укриття»",
    "subtitle": "PROJECTOR × WOOLKRAFTS",
    "category": "things",
    "price": 3100,
    "url": "https://www.prjctr.store/product-page/pled-ukryttya-projector-x-woolcraft",
    "image": "/products/blanket.jpg"
  },
  {
    "id": "strap",
    "name": "Ремінь DiMarzio Jim Root #4",
    "subtitle": "BLACK CLIPLOCK",
    "category": "music",
    "price": 1796,
    "url": "https://jam.ua/ua/dimarzio-dd2248-jim-root-4-black-cliplock",
    "image": "/products/strap.png"
  },
  {
    "id": "uppercut",
    "name": "Uppercut Deluxe — набір догляду",
    "subtitle": "TEXTURE CREAM + 3 IN 1 WASH",
    "category": "things",
    "price": 1590,
    "url": "https://makeup.com.ua/ua/product/1567478/",
    "image": "/products/uppercut.jpg"
  },
  {
    "id": "gaiwan-clay",
    "name": "Гайвань з іссинської глини",
    "subtitle": "ГЛАЗУРОВАНА · 150 МЛ",
    "category": "gaiwan",
    "price": 399,
    "url": "https://clubpuer.com.ua/avtentychna-haivan-z-issynskoi-hlyny-hlazurovana-z-kryshechkoiu-ta-bliudtsem-150/",
    "image": "/products/gaiwan-clay.webp"
  },
  {
    "id": "gaiwan-silver",
    "name": "«Цвіт срібної сливи»",
    "subtitle": "КЕРАМІКА · 200 МЛ",
    "category": "gaiwan",
    "price": 1349,
    "url": "https://clubpuer.com.ua/haivan-v-staroiaponskomu-styli-iz-keramiky-vysokotemperaturnoho-vypalu-na-vidkrytomu-vohni-tsvit-sribnoi-slyvy-200ml-kytai/",
    "image": "/products/gaiwan-silver.webp"
  },
  {
    "id": "gaiwan-crane",
    "name": "«Журавель, що приносить щастя»",
    "subtitle": "ПОСРІБЛЕНА · 150 МЛ",
    "category": "gaiwan",
    "price": 1799,
    "url": "https://clubpuer.com.ua/posriblena-haivn-try-talanty-z-keramiky-okysliuvalno-vidnovliuvalnoho-vypalu-ruihe-chengxiang-zhuravel-shcho-prynosyt-shchastia-150ml/",
    "image": "/products/gaiwan-crane.webp"
  },
  {
    "id": "gaiwan-kintsugi",
    "name": "Гайвань у стилі кінцуґі",
    "subtitle": "РУЧНА РОБОТА · 105 МЛ",
    "category": "gaiwan",
    "price": 2499,
    "url": "https://clubpuer.com.ua/avtorska-kolektsiina-hun-fu-haivan-ruchnoi-roboty-vid-maistra-chen-siaomina-styl-kintsuhi-105-ml",
    "image": "/products/gaiwan-kintsugi.webp"
  },
  {
    "id": "tea-white",
    "name": "«Дванадцять кроків до пробудження»",
    "subtitle": "БІЛИЙ ЧАЙ · 12 ПОРЦІЙ",
    "category": "tea",
    "price": 439,
    "url": "https://clubpuer.com.ua/dehustatsiinyi-nabir-vysokoiakisnykh-bilykh-portsiinykh-chaiv-dvanadtsiat-krokiv-do-probudzhennia-12sht/",
    "image": "/products/tea-white.webp"
  },
  {
    "id": "tea-puer",
    "name": "«Шляхом просвітлення»",
    "subtitle": "ПУЕР · 20 ПОРЦІЙ",
    "category": "tea",
    "price": 599,
    "url": "https://clubpuer.com.ua/dehustatsiinyi-nabir-portsiinykh-kytaiskykh-pueriv-shliakhom-prosvitlennia-20-shtuk/",
    "image": "/products/tea-puer.webp"
  },
  {
    "id": "tea-gaba",
    "name": "GABA 9 Club Puer",
    "subtitle": "ГАБА-ЧАЙ · 9 ПОРЦІЙ",
    "category": "tea",
    "price": 1399,
    "url": "https://clubpuer.com.ua/dehustatsiinyi-podarunkovyi-nabir-vidbirnoho-haba-chaiu-gaba-9-club-puer-9sht",
    "image": "/products/tea-gaba.webp"
  },
  {
    "id": "dunlop",
    "name": "Набір догляду Dunlop 6500",
    "subtitle": "ДЛЯ ГІТАРИ",
    "category": "music",
    "price": 2131,
    "url": "https://acropolis.ua/ru/catalog/acoustic-care-products/dunlop_6500/",
    "image": "/products/dunlop.jpg"
  },
  {
    "id": "vinyl",
    "name": "Slipknot — All Hope Is Gone",
    "subtitle": "ORANGE VINYL · 2 LP",
    "category": "music",
    "price": 2039,
    "url": "https://www.muziker.ua/slipknot-all-hope-is-gone-orange-vinyl-2-lp",
    "image": "/products/vinyl.jpg"
  },
  {
    "id": "headphones",
    "name": "Audio-Technica ATH-M20x",
    "subtitle": "СТУДІЙНІ НАВУШНИКИ",
    "category": "music",
    "price": 2599,
    "url": "https://www.muziker.ua/audio-technica-ath-m20x",
    "image": "/products/headphones.jpg"
  } ,
{
  "id": "sanatorium",
  "name": "Настільний квест «Sanatorium»",
  "subtitle": "ДЕТЕКТИВНИЙ КВЕСТ · 1–6 ГРАВЦІВ",
  "category": "games",
  "price": 949,
  "url": "https://manuscript.co.ua/sanatorium-1/",
  "image": "/products/sanatorium.png"
},
{
  "id": "mousemat",
  "name": "Ігровий килимок Game WoW",
  "subtitle": "РОЗМІР 400 × 900 ММ",
  "category": "games",
  "price": 828,
  "url": "https://workplaceshop.com.ua/velykyj-kylymok-dlya-myshi-game-wow/?attribute_pa_rozmir=400x900mm",
  "image": "/products/mousemat.webp"
},
{
  "id": "sennheiser-mx375",
  "name": "Sennheiser MX 375 Black",
  "subtitle": "УЛЮБЛЕНІ ВКЛАДИШІ",
  "category": "music",
  "price": 649,
  "url": "https://mta.ua/drotovi-navushnuki/66829-navushnyky-vkladyshi-providni-bez-mikrofona-sennheiser-mx-375-black",
  "image": "/products/sennheiser-mx375.jpg",
  "note": "Найкращі навушники для мене — користувався цією моделлю майже 8 років."
},
{
  "id": "tea-scales",
  "name": "Терези-чахе з ложкою",
  "subtitle": "ДЛЯ ЧАЙНИХ РИТУАЛІВ",
  "category": "gaiwan",
  "price": 890,
  "url": "https://homecoffee.com.ua/p2783232286-vesy-chahe-dlya.html",
  "image": "/products/tea-scales-homecoffee.jpg"
},
{
  "id": "kharkiv-lamp",
  "name": "Нічник «Kharkiv Urban»",
  "subtitle": "ПАНОРАМА ХАРКОВА · ЛАКОВАНЕ ДЕРЕВО",
  "category": "things",
  "price": 1390,
  "url": "https://kotofaktura.com.ua/ua/p3147680393-nochnik-panorama-kharkiv.html",
  "image": "/products/kharkiv-lamp.jpg"
}
];
export const groupKey=(p:Product)=>onePerGroup&&p.category==="gaiwan"&&p.id.startsWith("gaiwan-")?p.category:p.id;
