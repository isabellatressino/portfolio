import { technologies } from "../../data/techStack";
import { fadeLeft } from "../../animations/animations";
import TechGroup from "../utils/TechGroup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TechStack() {

  const { t } = useTranslation();

  return (
    <section
      id="tech"
      className="grid-design gap-y-10 p-8 sm:p-10 lg:p-20 pt-20"
    >
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="col-span-4 mx-auto sm:col-span-8 lg:col-span-12"
      >
        <h2>
          {t("tech.section.title.main")} <span className="text-primary">{" "}{t("tech.section.title.highlight")}</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-10 col-span-4 sm:col-span-8 sm:grid sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
        <TechGroup title={t("tech.groups.frontend")} items={technologies.frontend} />
        <TechGroup title={t("tech.groups.backend")} items={technologies.backend} />
        <TechGroup title={t("tech.groups.ai")} items={technologies.ia} highlight />
        <TechGroup title={t("tech.groups.others")} items={technologies.others} />
      </div>
    </section>
  );
}
