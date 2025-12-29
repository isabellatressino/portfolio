import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile.png";
import { fadeLeft, fadeRight, fadeUp, borderDraw } from "../../animations/animations";

export default function About() {

    return (
        <section id="about" className="min-h-screen grid-design gap-y-10 content-center p-8 sm:p-10 lg:p-20 2xl:p-0 pt-20">
            <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative col-span-4 sm:col-start-5 sm:self-end md:col-start-4 lg:col-start-6">
                <h2 className="">
                    Sobre
                    <span className="absolute text-primary top-8 left-22">
                        Mim
                    </span>
                </h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="col-span-4 relative mt-8 sm:mt-0 mx-auto sm:row-start-1 sm:row-span-3 sm:mr-6 md:col-span-3 lg:col-span-5 lg:row-span-4 lg:col-start-1 lg:row-start-1 lg:self-center"
            >
                <motion.div
                    variants={borderDraw}
                    className="border-2 border-primary h-full w-full absolute top-6 -left-6 -z-10"
                />

                <motion.img
                    variants={fadeRight}
                    src={profileImg}
                    alt="Foto de perfil"
                    className="max-h-100 sm:max-h-none md:max-h-120 lg:max-h-180"
                />
            </motion.div>


            <motion.p
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="col-span-4 border-l-2 pl-6 border-primary mt-6 sm:self-center md:col-span-5 lg:col-start-6 lg:col-span-7">
                Sou Isabella Tressino, estudante de engenharia de software com interesse em desenvolvimento de sistemas e inteligência artificial aplicada. Busco construir soluções bem estruturadas, conectando fundamentos acadêmicos a problemas reais.
            </motion.p>

            <div className="cursor-default col-span-4 grid sm:col-span-8 gap-6 sm:grid-cols-2 sm:grid-rows-0 sm:mt-10 lg:mt-0 lg:col-start-6 lg:col-span-7 lg:self-center">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ y: -10 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="border-2 p-6 flex-1">
                    <p className="uppercase font-display text-sm mb-2">Foco</p>
                    <p className="uppercase font-display text-xl text-text-main font-semibold mb-2">Desenvolvimento & IA</p>
                    <p>Criação de aplicações web e mobile com interesse em dados e inteligência artificial aplicada.</p>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ y: -10 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="border-2 p-6 flex-1">
                    <p className="uppercase font-display text-sm mb-2">Abordagem</p>
                    <p className="uppercase font-display text-xl text-text-main font-semibold mb-2">Base Acadêmica</p>
                    <p>Uso de fundamentos teóricos para estruturar soluções técnicas e evoluir projetos de forma consciente.</p>
                </motion.div>
            </div>

            <motion.button
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
                className="col-span-4 text-background bg-text-main hover:bg-primary hover:text-text-main sm:row-start-3 md:col-span-2 md:self-start lg:row-start-4 lg:col-start-6">Baixar CV</motion.button>

        </section>
    )
}