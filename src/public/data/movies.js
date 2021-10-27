import WonderWomanBanner from "../img/slider/wp3477736.jpg";
import LaLaLandBanner from "../img/slider/cat_4k-romantic-wallpapers_630306.jpg";
import LionKing from "../img/slider/the-lion-king-movie-8k-de.jpg";
import Aladdin from "../img/slider/aladdin-2019-movie-d4.jpg";

import WonderWomanBannerMobile from "../img/slider/mobile/86dc28b094a6b8b3123089c35c01fc8e.jpg";
import LaLaLandBannerMobile from "../img/slider/mobile/a70b160c019f8ebccb780f52a90e5ccf.jpg";
import LionKingMobile from "../img/slider/mobile/wp4396434.jpg";
import AladdinMobile from "../img/slider/mobile/wp5713010.jpg";

import WonderWomanThumb from "../img/thumbnails/wonderwoman.jpg";
import LaLaLandThumb from "../img/thumbnails/la-la-land-movie-poster-md.jpg";
import LionKingThumb from "../img/thumbnails/the-lion-king-movie-poster-md.jpg";
import AladdinThumb from "../img/thumbnails/aladdin-movie-poster-md.jpg";

const movies = [
  {
    id: 1,
    slug: "tt0451279",
    name: "Wonder Woman",
    persianName: "زن شگفت انگیز",
    language: [
      {id: 1, name: "انگلیسی"},
      {id: 2, name: "فارسی"},
    ],
    country: [
      {id: 1, name: "آمریکا"},
      {id: 2, name: "فرانسه"},
    ],
    year: "2017",
    duration: "141 دقیقه",
    esrb: "PG13",
    story:
      "فیلم داستان زنی به نام دایانا (گل گدوت) را روایت میکند که شاهزاده آمازون می باشد و در یک پناهگاه سری، برای تبدیل شدن به یک جنگجوی شکست ناپذیر آموزش دیده است. پس از آنکه یک خلبان آمریکایی هواپیمایش سقوط میکند و در جزیره آنها پیدا می شود، دایانا را از وقوع یک جنگ جهانی مطلع میکند و…",
    banner: WonderWomanBanner,
    bannerMobile: WonderWomanBannerMobile,
    thumbnail: WonderWomanThumb,
    genres: [
      { id: 1, name: "اکشن" },
      { id: 2, name: "فانتزی" },
      { id: 3, name: "ماجراجویی" },
    ],
    directors: [{ id: 1, name: "Patty Jenkins" }],
    cast: [
      { id: 1, name: "Gal Gadot" },
      { id: 2, name: "Connie Nielsen" },
      { id: 3, name: "Chris Pine" },
    ],
  },
  {
    id: 2,
    slug: "tt3783958",
    name: "La La Land",
    persianName: "لا لا لند",
    language: [
      {id: 1, name: "انگلیسی"},
      {id: 2, name: "فارسی"},
    ],
    country: [
      {id: 1, name: "آمریکا"},
      {id: 2, name: "فرانسه"},
    ],
    year: "2016",
    duration: "128 دقیقه",
    esrb: "PG13",
    story:
      "داستان این فیلم در مورد یک مرد پیانیست و یک زن بازیگر می باشد که در لُس آنجلس فعالیت دارند. اما دیگر این نوازنده نمیتواند بنوازد و این بانوی بازیگر نمیتواند بازی کند...",
    banner: LaLaLandBanner,
    bannerMobile: LaLaLandBannerMobile,
    thumbnail: LaLaLandThumb,
    genres: [
      { id: 1, name: "درام" },
      { id: 2, name: "موزیک" },
      { id: 3, name: "کمدی" },
    ],
    directors: [{ id: 1, name: "Damien Chazelle" }],
    cast: [
      { id: 1, name: "Ryan Reynolds" },
      { id: 2, name: "Emma Stone" },
      { id: 3, name: "Rosemarie DeWitt" },
    ],
  },
  {
    id: 3,
    slug: "tt6105098",
    name: "The Lion King",
    persianName: "شیر شاه",
    language: [
      {id: 1, name: "انگلیسی"},
      {id: 2, name: "فارسی"},
    ],
    country: [
      {id: 1, name: "آمریکا"},
      {id: 2, name: "فرانسه"},
    ],
    year: "2019",
    duration: "118 دقیقه",
    esrb: "PG",
    story:
      "یک شاهزاده شیر جوان پس از مرگ پدرش، برای درک معنای حقیقی شجاعت و مسئولیت‌پذیری از آنجا فرار می‌کند...",
    banner: LionKing,
    bannerMobile: LionKingMobile,
    thumbnail: LionKingThumb,
    genres: [
      { id: 1, name: "ماجراجویی" },
      { id: 2, name: "درام" },
    ],
    directors: [{ id: 1, name: "Jon Favreau" }],
    cast: [
      { id: 1, name: "John Oliver" },
      { id: 2, name: "James Earl Jones" },
      { id: 3, name: "Chiwetel Ejiofor" },
    ],
  },
  {
    id: 4,
    slug: "tt6139732",
    name: "Aladdin",
    persianName: "علائدین",
    language: [
      {id: 1, name: "انگلیسی"},
      {id: 2, name: "فارسی"},
    ],
    country: [
      {id: 1, name: "آمریکا"},
      {id: 2, name: "فرانسه"},
    ],
    year: "2019",
    duration: "128 دقیقه",
    esrb: "PG",
    story:
      "علاءالدین پسر سرکش و خوش‌قلب خیابان و صدراعظم تشنه‌ی قدرت برای به دست آوردن چراغی جادویی مبارزه می‌کنند که می‌تواند آرزوهایشان را برآورده سازد...",
    banner: Aladdin,
    bannerMobile: AladdinMobile,
    thumbnail: AladdinThumb,
    genres: [
      { id: 1, name: "خانوادگی" },
      { id: 2, name: "ماجراجویی" },
      { id: 3, name: "کمدی" },
    ],
    directors: [{ id: 1, name: "Guy Ritchie" }],
    cast: [
      { id: 1, name: "Will Smith" },
      { id: 2, name: "Naomi Scott" },
      { id: 3, name: "Mena Massoud" },
    ],
  },
];

export default movies;
