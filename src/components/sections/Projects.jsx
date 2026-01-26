import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { fadeLeft, fadeRight, fadeUp } from "../../animations/animations";
import { useTranslation } from "react-i18next";

export default function Projects() {

    const { t } = useTranslation();

    return (
        <section
            id="projects"
        >
            <div className="max-w-300 mx-auto grid-design content-center px-8 sm:px-10 lg:px-20 2xl:px-0 pt-30 md:pt-50">
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative col-span-4 sm:ml-10 lg:ml-20 xl:ml-0 sm:col-span-8 lg:col-span-12"
                >
                    <h2 className="mb-18">
                        {t("projects.section.title.main")}
                        <span className="absolute text-primary top-8 left-18">
                            {t("projects.section.title.highlight")}
                        </span>
                    </h2>
                </motion.div>
            </div>
            <div className="overflow-hidden">
                <div className="col-span-4 mt-10 sm:col-span-8 lg:col-span-12 bg-surface">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        const cardAnimation = isEven ? fadeLeft : fadeRight;
                        return (
                            <motion.div
                                key={index}
                                variants={cardAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className={`group border border-text-muted sm:flex ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                                    }`}
                            >
                                <motion.div
                                    variants={fadeUp}
                                    className="p-4 bg-text-muted/10 sm:flex-1 sm:flex sm:justify-center 2xl:max-w-200 overflow-hidden"
                                >
                                    <img
                                        src={project.imgUrl}
                                        alt=""
                                        aria-hidden="true"
                                        className="self-center lg:max-h-80 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                    />
                                </motion.div>
                                <motion.div
                                    variants={fadeUp}
                                    className={`p-8 flex flex-col gap-4 sm:flex-1 sm:justify-center ${isEven
                                        ? "sm:border-r sm:border-text-muted sm:mr-10"
                                        : "sm:border-l sm:border-text-muted sm:ml-10"
                                        } 2xl:max-w-200`}
                                >
                                    <h3>{t(`projects.items.${project.id}.name`)}</h3>
                                    <p>{t(`projects.items.${project.id}.description`)}</p>
                                    <div className="border-l-2 border-primary pl-2 flex gap-2 flex-wrap">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center uppercase text-xs"
                                            >
                                                {tech}
                                                {i < project.technologies.length - 1 && (
                                                    <span className="ml-3 text-primary/20">/</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        {project.liveDemo && (
                                            <motion.a
                                                href={project.liveDemo}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                transition={{ duration: .5 }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-display uppercase h-8 xs:h-10 flex items-center justify-center bg-primary text-text-main hover:bg-text-main hover:text-background transition-colors duration-1000 ease-out"
                                            >
                                                {t("projects.actions.live")}
                                            </motion.a>
                                        )}
                                        {project.repo && (
                                            <motion.a
                                                href={project.repo}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                transition={{ duration: .5 }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-display uppercase h-8 xs:h-10 flex items-center justify-center bg-text-main text-background hover:bg-primary hover:text-text-main transition-colors duration-1000 ease-out"
                                            >
                                                {t("projects.actions.code")}
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
