import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            pt: { translation: pt },
            en: { translation: en }
        },
        lng: "pt",
        fallbackLng: "pt",
        interpolation: {
            escapeValue: false
        }
    });

// Mantém o atributo lang da página em sincronia com o idioma escolhido
i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng === "pt" ? "pt-BR" : lng;
});

export default i18n;
