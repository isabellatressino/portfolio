import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { NavItem } from "../utils/NavItem";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                <div className="mx-auto max-w-300 flex items-center justify-end px-8 sm:px-10 lg:px-20 py-2 md:py-4">

                    <ul className="hidden sm:flex gap-8 uppercase text-sm font-display">
                        <NavItem href="#about">Sobre mim</NavItem>
                        <NavItem href="#projects">Projetos</NavItem>
                        <NavItem href="#tech">Tecnologias</NavItem>
                    </ul>


                    <button
                        onClick={() => setOpen(true)}
                        className="sm:hidden uppercase font-display text-base"
                    >
                        Menu
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && <MobileMenu onClose={() => setOpen(false)} />}
            </AnimatePresence>
        </>
    );
}
