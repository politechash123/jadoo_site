// English lives in the HTML; this file holds Russian and Armenian.
// Keys match the data-i18n / data-i18n-alt / data-i18n-placeholder / data-i18n-aria attributes.
const translations = {
  ru: {
    'meta.title': 'Jadoo — Путешествуй, наслаждайся и живи яркой жизнью',
    'nav.hotels': 'Отели',
    'nav.flights': 'Авиабилеты',
    'nav.bookings': 'Бронирования',
    'nav.login': 'Войти',
    'nav.signup': 'Регистрация',

    'hero.imgAlt': 'Путешественница с красным чемоданом',
    'hero.tagline': 'Лучшие направления по всему миру',
    'hero.title': 'Путешествуй,<br>наслаждайся и живи<br>новой жизнью',
    'hero.desc': 'Откройте для себя лучшие уголки планеты: мы подберём маршрут, забронируем билеты и отель, а вам останется только наслаждаться поездкой.',
    'hero.find': 'Подробнее',
    'hero.play': 'Смотреть демо',

    'services.eyebrow': 'КАТЕГОРИИ',
    'services.title': 'Мы предлагаем лучшие услуги',
    'services.weather.title': 'Прогноз погоды',
    'services.weather.desc': 'Точный прогноз для каждой точки вашего маршрута.',
    'services.flights.title': 'Лучшие перелёты',
    'services.flights.desc': 'Выгодные рейсы от надёжных авиакомпаний.',
    'services.events.title': 'Местные события',
    'services.events.desc': 'Концерты, фестивали и экскурсии там, куда вы едете.',
    'services.custom.title': 'Индивидуальный подход',
    'services.custom.desc': 'Соберём путешествие под ваши желания и бюджет.',

    'dest.eyebrow': 'Хиты продаж',
    'dest.title': 'Популярные направления',
    'dest.london': 'Лондон, Великобритания',
    'dest.rome': 'Рим, Италия',
    'dest.europe': 'Вся Европа',
    'dest.days12': 'Тур на 12 дней',
    'dest.days10': 'Тур на 10 дней',
    'dest.days28': 'Тур на 28 дней',

    'steps.eyebrow': 'Легко и быстро',
    'steps.title': 'Забронируйте поездку<br>за 3 простых шага',
    'steps.s1.title': 'Выберите направление',
    'steps.s1.desc': 'Сотни городов и курортов —<br>найдите своё идеальное место.',
    'steps.s2.title': 'Оплатите',
    'steps.s2.desc': 'Безопасная оплата картой<br>за пару кликов.',
    'steps.s3.title': 'Приезжайте в аэропорт в выбранный день',
    'steps.s3.desc': 'Мы напомним о вылете<br>и пришлём все документы.',
    'steps.card.title': 'Поездка в Грецию',
    'steps.card.date': '14–29 июня',
    'steps.card.by': 'автор: Robbin Joseph',

    'testimonials.eyebrow': 'Отзывы',
    'testimonials.title': 'Что о нас<br>говорят люди',

    'subscribe.title': 'Подпишитесь, чтобы получать новости, свежие предложения и другие интересные акции от Jadoo',
    'subscribe.email': 'Ваш email',
    'subscribe.btn': 'Подписаться',

    'footer.company': 'Компания',
    'footer.about': 'О нас',
    'footer.careers': 'Карьера',
    'footer.mobile': 'Приложение',
    'footer.contact': 'Контакты',
    'footer.help': 'Помощь/FAQ',
    'footer.press': 'Пресса',
    'footer.affiliates': 'Партнёры',
    'footer.more': 'Ещё',
    'footer.fees': 'Сборы',
    'footer.airline': 'Авиакомпании',
    'footer.tips': 'Как сэкономить',
    'footer.discover': 'Скачайте наше приложение',
    'footer.design': 'Дизайн',
    'footer.dev': 'Разработка',
  },

  hy: {
    'meta.title': 'Jadoo — Ճամփորդիր, վայելիր և ապրիր նոր կյանքով',
    'nav.hotels': 'Հյուրանոցներ',
    'nav.flights': 'Ավիատոմսեր',
    'nav.bookings': 'Ամրագրումներ',
    'nav.login': 'Մուտք',
    'nav.signup': 'Գրանցում',

    'hero.imgAlt': 'Ճամփորդ աղջիկ կարմիր ճամպրուկով',
    'hero.tagline': 'Լավագույն ուղղություններն ամբողջ աշխարհում',
    'hero.title': 'Ճամփորդիր,<br>վայելիր և ապրիր<br>նոր կյանքով',
    'hero.desc': 'Բացահայտեք մոլորակի լավագույն անկյունները. մենք կընտրենք երթուղին, կամրագրենք տոմսերն ու հյուրանոցը, իսկ ձեզ կմնա միայն վայելել ճամփորդությունը։',
    'hero.find': 'Իմանալ ավելին',
    'hero.play': 'Դիտել դեմոն',

    'services.eyebrow': 'ԿԱՏԵԳՈՐԻԱՆԵՐ',
    'services.title': 'Մենք առաջարկում ենք լավագույն ծառայություններ',
    'services.weather.title': 'Եղանակի կանխատեսում',
    'services.weather.desc': 'Ճշգրիտ կանխատեսում ձեր երթուղու յուրաքանչյուր կետի համար։',
    'services.flights.title': 'Լավագույն չվերթներ',
    'services.flights.desc': 'Շահավետ չվերթներ հուսալի ավիաընկերություններից։',
    'services.events.title': 'Տեղական միջոցառումներ',
    'services.events.desc': 'Համերգներ, փառատոններ և էքսկուրսիաներ այնտեղ, ուր մեկնում եք։',
    'services.custom.title': 'Անհատական մոտեցում',
    'services.custom.desc': 'Կկազմենք ճամփորդություն՝ ըստ ձեր ցանկությունների և բյուջեի։',

    'dest.eyebrow': 'Ամենապահանջված',
    'dest.title': 'Հանրաճանաչ ուղղություններ',
    'dest.london': 'Լոնդոն, Մեծ Բրիտանիա',
    'dest.rome': 'Հռոմ, Իտալիա',
    'dest.europe': 'Ամբողջ Եվրոպա',
    'dest.days12': '12-օրյա ուղևորություն',
    'dest.days10': '10-օրյա ուղևորություն',
    'dest.days28': '28-օրյա ուղևորություն',

    'steps.eyebrow': 'Հեշտ և արագ',
    'steps.title': 'Ամրագրեք ճամփորդությունը<br>3 պարզ քայլով',
    'steps.s1.title': 'Ընտրեք ուղղությունը',
    'steps.s1.desc': 'Հարյուրավոր քաղաքներ և հանգստավայրեր՝<br>գտեք ձեր իդեալական վայրը։',
    'steps.s2.title': 'Վճարեք',
    'steps.s2.desc': 'Անվտանգ վճարում քարտով՝<br>ընդամենը մի քանի սեղմումով։',
    'steps.s3.title': 'Ժամանեք օդանավակայան ընտրված օրը',
    'steps.s3.desc': 'Մենք կհիշեցնենք թռիչքի մասին<br>և կուղարկենք բոլոր փաստաթղթերը։',
    'steps.card.title': 'Ճամփորդություն Հունաստան',
    'steps.card.date': 'հունիսի 14–29',
    'steps.card.by': 'հեղինակ՝ Robbin Joseph',

    'testimonials.eyebrow': 'Կարծիքներ',
    'testimonials.title': 'Ինչ են ասում<br>մեր մասին',

    'subscribe.title': 'Բաժանորդագրվեք՝ ստանալու նորություններ, թարմ առաջարկներ և այլ հետաքրքիր ակցիաներ Jadoo-ից',
    'subscribe.email': 'Ձեր էլ. փոստը',
    'subscribe.btn': 'Բաժանորդագրվել',

    'footer.company': 'Ընկերություն',
    'footer.about': 'Մեր մասին',
    'footer.careers': 'Կարիերա',
    'footer.mobile': 'Հավելված',
    'footer.contact': 'Կապ',
    'footer.help': 'Օգնություն',
    'footer.press': 'Մամուլ',
    'footer.affiliates': 'Գործընկերներ',
    'footer.more': 'Ավելին',
    'footer.fees': 'Վճարներ',
    'footer.airline': 'Ավիաընկերություններ',
    'footer.tips': 'Ինչպես խնայել',
    'footer.discover': 'Ներբեռնեք մեր հավելվածը',
    'footer.design': 'Դիզայն',
    'footer.dev': 'Ծրագրավորում',
  },
};

const LANGS = ['en', 'ru', 'hy'];
const STORAGE_KEY = 'jadoo-lang';

// Snapshot the English copy from the page so it is the fallback for every key.
const nodes = {
  text: [...document.querySelectorAll('[data-i18n]')].map((el) => ({ el, key: el.dataset.i18n, en: el.innerHTML })),
  alt: [...document.querySelectorAll('[data-i18n-alt]')].map((el) => ({ el, key: el.dataset.i18nAlt, en: el.alt })),
  placeholder: [...document.querySelectorAll('[data-i18n-placeholder]')].map((el) => ({ el, key: el.dataset.i18nPlaceholder, en: el.placeholder })),
  aria: [...document.querySelectorAll('[data-i18n-aria]')].map((el) => ({ el, key: el.dataset.i18nAria, en: el.getAttribute('aria-label') })),
};

function setLanguage(lang) {
  if (!LANGS.includes(lang)) lang = 'en';
  const dict = translations[lang] || {};
  const pick = (n) => dict[n.key] ?? n.en;

  nodes.text.forEach((n) => { n.el.innerHTML = pick(n); });
  nodes.alt.forEach((n) => { n.el.alt = pick(n); });
  nodes.placeholder.forEach((n) => { n.el.placeholder = pick(n); });
  nodes.aria.forEach((n) => { n.el.setAttribute('aria-label', pick(n)); });

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
}

function initialLanguage() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* storage blocked */ }
  return 'en';
}

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
setLanguage(initialLanguage());
