import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./locales/en/common.json";
import info_en from "./locales/en/info.json";
import shop_en from "./locales/en/shop.json";
import tos_en from "./locales/en/tos.json";
import common_vi from "./locales/vie/common.json";
import info_vi from "./locales/vie/info.json";
import shop_vi from "./locales/vie/shop.json";
import tos_vi from "./locales/vie/tos.json";
import landing_en from "./locales/en/landing.json";
import landing_vi from "./locales/vie/landing.json";
import testimonials_en from "./locales/en/testimonials.json";
import testimonials_vi from "./locales/vie/testimonials.json";
import footer_en from "./locales/en/footer.json";
import footer_vi from "./locales/vie/footer.json";
/* thêm clouds */
import clouds_en from "./locales/en/cloudCarousel.json";
import clouds_vi from "./locales/vie/cloudCarousel.json";
import shopCarousel_en from "./locales/en/shopCarousel.json";
import shopCarousel_vi from "./locales/vie/shopCarousel.json";
import forecaster_en from "./locales/en/forecaster.json";
import forecaster_vi from "./locales/vie/forecaster.json";
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: common_en,
        info: info_en,
        shop: shop_en,
        tos: tos_en,
        landing: landing_en,
        testimonials: testimonials_en,
        clouds: clouds_en,
        shopCarousel: shopCarousel_en,
        forecaster: forecaster_en,
        footer: footer_en,
      },
      vi: {
        common: common_vi,
        info: info_vi,
        shop: shop_vi,
        tos: tos_vi,
        landing: landing_vi,
        testimonials: testimonials_vi,
        clouds: clouds_vi,
        shopCarousel: shopCarousel_vi,
        forecaster: forecaster_vi,
        footer: footer_vi,
      },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["common", "info", "shop", "tos", "landing", "testimonials", "clouds", "forecaster", "footer"], // namespace cho từng page
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
