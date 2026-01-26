import { motion } from "framer-motion";
import LanguageToggle from "../utils/LanguageToggle";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";

export default function MobileMenu({ onClose, theme, toggleTheme }) {

    const { t } = useTranslation();
    const isDark = theme === "dark";

    return (
        <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-60 bg-background px-8 py-10 flex flex-col items-end"
        >
            <button
                onClick={onClose}
                aria-label={t("navbar.menu-close")}
                className="uppercase font-mono text-sm mb-16"
            >
                Close
            </button>

            <ul className="flex flex-col gap-10 text-3xl font-display uppercase text-end items-end">
                <li role="menuitem" onClick={onClose}><a href="#about">{t("navbar.about")}</a></li>
                <li role="menuitem" onClick={onClose}><a href="#projects">{t("navbar.projects")}</a></li>
                <li role="menuitem" onClick={onClose}><a href="#tech">{t("navbar.tech")}</a></li>
                <li>
                    <LanguageToggle className="text-3xl font-display" />
                </li>
                <li>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={t("navbar.toggleTheme")}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full text-text-muted transition-colors duration-300 hover:text-text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        {isDark ? (
                            <Sun aria-hidden="true" className="h-6 w-6" />
                        ) : (
                            <Moon aria-hidden="true" className="h-6 w-6" />
                        )}
                    </button>
                </li>
            </ul>
        </motion.div>
    );
}
