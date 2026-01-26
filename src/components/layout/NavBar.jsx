import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { NavItem } from "../utils/NavItem";
import LanguageToggle from '../utils/LanguageToggle.jsx'
import { useTranslation } from "react-i18next";
import useTheme from "../utils/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const { t } = useTranslation();
    const isDark = theme === "dark";

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 z-50 w-full transition-colors ease-out duration-500 ${scrolled ? "bg-background/80 backdrop-blur" : "bg-transparent"}`}>
                <div className="mx-auto max-w-300 flex items-center justify-between px-8 sm:px-10 lg:px-20 2xl:px-0 py-2 md:py-4">

                    <motion.a
                        href="#hero"
                        className="flex gap-2 items-center"
                        initial={{ opacity: 0 }}
                        aria-label={t("navbar.logo-aria")}
                        animate={{
                            opacity: scrolled ? 1 : 0,
                            pointerEvents: scrolled ? "auto" : "none",
                        }}
                        transition={{ duration: .5, ease: "easeOut" }}
                    >
                        <img aria-hidden="true" src="favicon-32x32.png" className="h-6" />
                        <span className="uppercase font-display text-text-main">
                            Isabella Tressino
                        </span>
                    </motion.a>


                    <ul className="hidden sm:flex gap-8 uppercase items-center text-sm font-display">
                        <NavItem href="#about">{t("navbar.about")}</NavItem>
                        <NavItem href="#projects">{t("navbar.projects")}</NavItem>
                        <NavItem href="#tech">{t("navbar.tech")}</NavItem>
                        <li>
                            <LanguageToggle />
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={toggleTheme}
                                aria-label={t("navbar.toggleTheme")}
                                className="inline-flex items-center justify-center h-8 w-8 xs:h-10 xs:w-10 rounded-full text-text-muted transition-colors duration-300 hover:text-text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                {isDark ? (
                                    <Sun aria-hidden="true" className="h-4 w-4 xs:h-5 xs:w-5" />
                                ) : (
                                    <Moon aria-hidden="true" className="h-4 w-4 xs:h-5 xs:w-5" />
                                )}
                            </button>
                        </li>
                    </ul>

                    <button
                        onClick={() => setOpen(true)}
                        aria-label={t("navbar.menu")}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="sm:hidden uppercase font-display text-base"
                    >
                        {t("navbar.menu")}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <MobileMenu
                        onClose={() => setOpen(false)}
                        theme={theme}
                        toggleTheme={toggleTheme}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
