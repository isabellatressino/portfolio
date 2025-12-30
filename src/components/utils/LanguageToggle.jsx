import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const isEN = i18n.language.startsWith("en");

    const buttonClass = (active) =>
        `${active ? "text-primary" : "text-text-muted hover:text-primary"} h-auto`;

    return (
        <div className="flex items-center gap-1">
            <button
                onClick={() => i18n.changeLanguage("en")}
                className={buttonClass(isEN)}
            >
                EN
            </button>

            <span className="text-text-muted">|</span>

            <button
                onClick={() => i18n.changeLanguage("pt")}
                className={buttonClass(!isEN)}
            >
                PT
            </button>
        </div>
    );
}
