import { useRef, useLayoutEffect, useState } from "react";

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

    return (
        <section id="hero"
            ref={heroRef}
            className="relative min-h-screen grid-design content-center px-8 sm:px-10 lg:px-20 2xl:px-0 pt-10"
        >
            <div
                className="absolute left-10 top-0 w-[35%] md:w-[20%] bg-primary -z-10 sm:left-12 lg:left-24"
                style={{ height: `${barHeight}px` }}
            />

            <p className="col-span-4 uppercase text-[10px] text-text-main font-mono xs:text-xs sm:col-span-8">
                Estudante de Engenharia de Software
            </p>

            <h1 className="col-span-4 flex flex-col sm:col-span-8 sm:grid sm:grid-cols-8 lg:grid-cols-12 lg:col-span-12">
                <span className="sm:col-span-8 ">Isabella</span>
                <span ref={spanRef} className="ml-6 sm:ml-0 sm:col-start-2 sm:col-span-8 text-gradient">
                    Tressino
                </span>
            </h1>

            <p className="col-span-4 mt-6 font-mono sm:col-start-2 sm:col-span-6">
                Estudante de engenharia de software com foco em desenvolvimento de sistemas{" "}
                <span className="bg-primary text-text-main">
                    inteligência artificial
                </span>{" "}
                aplicada.
            </p>

            <button className="bg-text-main text-background col-span-4 mt-6 xs:col-span-2 sm:col-start-2 hover:bg-primary hover:text-text-main hover:scale-105">
                Ver Projetos
            </button>
            <button className="text-text-main bg-background border border-text-main mt-6 col-span-4 xs:col-span-2 sm:col-start-4 hover:bg-text-muted/50 hover:scale-105">
                Quem Sou Eu
            </button>


            <div className="col-span-4 flex flex-col mt-10 items-end uppercase font-mono sm:col-span-8 lg:col-start-11 lg:mt-0 lg:col-span-2">
                <a href="mailto:tressinoisabella@gmail.com" className="cursor-pointer hover:text-primary transition-all duration-500">Email</a>
                <a href="https://github.com/isabellatressino" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-primary transition-all duration-500">Github</a>
                <a href="https://www.linkedin.com/in/isabellatressino" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-primary transition-all duration-500">Linkedin</a>
            </div>
        </section>
    );
}
