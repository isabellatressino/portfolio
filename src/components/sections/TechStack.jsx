import { technologies } from "../../data/techStack"
import TechGroup from "../utils/TechGroup"

export default function TechStack() {
    return (
        <section id="tech" className="grid-design gap-y-10 p-8 sm:p-10 lg:p-20 pt-20">

            <div className="col-span-4 mx-auto sm:col-span-8 lg:col-span-12">
                <h2>
                    Tech {" "}
                    <span className="text-primary">
                        & Tools
                    </span>
                </h2>
            </div>

            <div className="flex flex-col gap-10 col-span-4 sm:col-span-8 sm:grid sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
                <TechGroup title="Frontend" items={technologies.frontend} />
                <TechGroup title="Backend" items={technologies.backend} />
                <TechGroup title="IA & Dados" items={technologies.ia} highlight />
                <TechGroup title="Outros" items={technologies.others} />
            </div>

        </section>
    )
}