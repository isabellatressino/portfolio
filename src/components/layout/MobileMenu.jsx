import { motion } from "framer-motion";

export default function MobileMenu({ onClose }) {
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

            <ul className="flex flex-col gap-10 text-3xl font-display uppercase text-end">
                <li onClick={onClose}><a href="#about">Sobre mim</a></li>
                <li onClick={onClose}><a href="#projects">Projetos</a></li>
                <li onClick={onClose}><a href="#tech">Tecnologias</a></li>
            </ul>
        </motion.div>
    );
}
