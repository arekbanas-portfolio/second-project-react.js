import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

const resources = {
    pl: { translation: common_pl},
    en: { translation: common_en},
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;