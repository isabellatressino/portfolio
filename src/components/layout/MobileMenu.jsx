import { motion } from "framer-motion";
import LanguageToggle from "../utils/LanguageToggle";
import { useTranslation } from "react-i18next";

export default function MobileMenu({ onClose }) {

    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-60 bg-background px-8 py-10 flex flex-col items-end"
        >
            <button
                onClick={onClose}
                className="uppercase font-mono text-sm mb-16"
            >
                Close
            </button>

            <ul className="flex flex-col gap-10 text-3xl font-display uppercase text-end items-end">
                <li onClick={onClose}><a href="#about">{t("navbar.about")}</a></li>
                <li onClick={onClose}><a href="#projects">{t("navbar.projects")}</a></li>
                <li onClick={onClose}><a href="#tech">{t("navbar.tech")}</a></li>
                <li>
                    <LanguageToggle className="text-3xl font-display" />
                </li>
            </ul>
        </motion.div>
    );
}
