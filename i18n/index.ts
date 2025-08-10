/* eslint-disable import/no-named-as-default-member */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";
import { reloadAsync } from "expo-updates";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

const initI18n = async () => {
  const locales = getLocales();
  const defaultLanguage = locales[0].languageCode || "en";
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = defaultLanguage;
  }

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: savedLanguage,
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

I18nManager.allowRTL(true);

i18n.on("languageChanged", (lang) => {
  if (lang === "ar") I18nManager.forceRTL(true);
  else I18nManager.forceRTL(false);
});

export const changeLanguage = async (lang: "en" | "ar") => {
  await AsyncStorage.setItem("language", lang);
  await i18n.changeLanguage(lang);

  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);

  console.log(I18nManager.isRTL);
  // if (lang === "ar") I18nManager.forceRTL(true);
  // else I18nManager.forceRTL(false);

  reloadAsync();
};
export default i18n;
