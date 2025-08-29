import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      info: "Info",
      shop: "Shop",
      tos: "Terms of Service",
    },
  },
  vi: {
    translation: {
      home: "Trang chủ",
      info: "Thông tin",
      shop: "Cửa hàng",
      tos: "Điều khoản",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // ngôn ngữ mặc định
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
