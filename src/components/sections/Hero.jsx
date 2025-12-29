import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import TechMarquee from "../utils/TechMarquee";

export default function Hero() {
    const heroRef = useRef(null);
    const spanRef = useRef(null);
    const [barHeight, setBarHeight] = useState(0);

    useLayoutEffect(() => {
        if (!heroRef.current || !spanRef.current) return;

        const calculate = () => {
            const heroTop = heroRef.current.getBoundingClientRect().top;
            const spanRect = spanRef.current.getBoundingClientRect();
            const spanMiddle = spanRect.top + spanRect.height / 2;

            setBarHeight(spanMiddle - heroTop);
        };

        calculate();

        const observer = new ResizeObserver(calculate);
        observer.observe(spanRef.current);
        window.addEventListener("resize", calculate);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", calculate);
        };
    }, []);

    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const socials = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.section
            id="hero"
            ref={heroRef}
            variants={container}
            initial="hidden"
            animate="show"
            className="relative min-h-screen grid-design content-center px-8 sm:px-10 lg:px-20 2xl:px-0 pt-10"
        >
            <motion.div
                className="absolute left-10 top-0 w-[35%] md:w-[20%] bg-primary -z-10 sm:left-12 lg:left-24"
                initial={{ height: 0 }}
                animate={{ height: barHeight }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <motion.p
                variants={fadeUp}
                className="col-span-4 uppercase text-[10px] text-text-main font-mono xs:text-xs sm:col-span-8"
            >
                Estudante de Engenharia de Software
            </motion.p>

            <motion.h1
                variants={fadeUp}
                className="col-span-4 flex flex-col sm:col-span-8 sm:grid sm:grid-cols-8 lg:grid-cols-12 lg:col-span-12"
            >
                <span className="sm:col-span-8">Isabella</span>
                <span
                    ref={spanRef}
                    className="ml-6 sm:ml-0 sm:col-start-2 sm:col-span-8 text-gradient"
                >
                    Tressino
                </span>
            </motion.h1>

            <motion.p
                variants={fadeUp}
                className="col-span-4 mt-6 font-mono sm:col-start-2 sm:col-span-6"
            >
                Estudante de engenharia de software com foco em desenvolvimento de sistemas{" "}
                <span className="bg-primary text-text-main">
                    inteligência artificial
                </span>{" "}
                aplicada.
            </motion.p>

            <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: .5 }}
                href="#projects"
                className="text-sm font-display uppercase h-8 xs:h-10 flex items-center justify-center bg-text-main text-background col-span-4 mt-6 xs:col-span-2 sm:col-start-2 transition-colors duration-500 ease-out hover:bg-primary hover:text-text-main"
            >
                Ver Projetos
            </motion.a>

            <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: .5 }}
                href="#about"
                className="text-sm font-display uppercase h-8 xs:h-10 flex items-center justify-center text-text-main bg-background border border-text-main mt-6 col-span-4 xs:col-span-2 sm:col-start-4 transition-colors duration-500 ease-out hover:bg-text-muted hover:text-background"
            >
                Quem Sou Eu
            </motion.a>

            <motion.div
                variants={socials}
                className="col-span-4 flex flex-col mt-10 items-end uppercase font-mono sm:col-span-8 lg:col-start-11 lg:mt-0 lg:col-span-2"
            >
                <motion.a
                    variants={fadeUp}
                    href="mailto:tressinoisabella@gmail.com"
                    className="cursor-pointer hover:text-primary transition-colors duration-500 ease-out"
                >
                    Email
                </motion.a>

                <motion.a
                    variants={fadeUp}
                    href="https://github.com/isabellatressino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-primary transition-colors duration-500 ease-out"
                >
                    Github
                </motion.a>

                <motion.a
                    variants={fadeUp}
                    href="https://www.linkedin.com/in/isabellatressino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-primary transition-colors duration-500 ease-out"
                >
                    Linkedin
                </motion.a>
            </motion.div>

            {/* <TechMarquee /> */}

        </motion.section>
    );
}
