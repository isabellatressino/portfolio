import { projects } from "../../data/projects"

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen grid-design py-8 sm:py-10 lg:py-20 pt-18">

            <div className="relative col-span-4 ml-8 sm:ml-10 lg:ml-20 sm:col-span-8 lg:col-span-12">
                <h2 className="">
                    Meus
                    <span className="absolute text-primary top-8 left-18">
                        Projetos
                    </span>
                </h2>
            </div>

            <div className="col-span-4 mt-20 sm:col-span-8 lg:col-span-12 bg-surface">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`border border-text-muted sm:flex ${index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} `}>
                        <div className="p-4 bg-text-muted/10 sm:flex-1 sm:flex sm:justify-center 2xl:max-w-200">
                            <img
                                src={project.imgUrl}
                                alt={project.name}
                                className="self-center lg:max-h-80"
                            />
                        </div>

                        <div
                            className={`p-8 flex flex-col gap-4 sm:flex-1 sm:justify-center ${index % 2 === 1 ? "sm:border-l sm:border-text-muted sm:ml-10" : "sm:border-r sm:border-text-muted sm:mr-10"} 2xl:max-w-200`}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>

                            <div className="border-l-2 border-primary pl-2 flex gap-2 flex-wrap">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="flex items-center uppercase text-xs">
                                        {tech}
                                        {i < project.technologies.length - 1 && (
                                            <span className="ml-3 text-primary/20">/</span>
                                        )}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-display uppercase h-8 xs:h-10 flex items-center justify-center bg-primary text-text-main hover:bg-text-main hover:text-background transition"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-display uppercase h-8 xs:h-10 flex items-center justify-center bg-text-main text-background hover:bg-primary hover:text-text-main transition"
                                    >
                                        Ver Código
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}