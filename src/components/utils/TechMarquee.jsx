import { motion } from "framer-motion";
import { technologies } from "../../data/techStack";

const techs = Object.values(technologies).flat();

export default function TechMarquee() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-text-muted/30 bg-background"
        >
            <motion.div
                className="flex w-max gap-10 py-3 uppercase font-mono text-xs text-text-muted"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 45,
                    ease: "linear",
                }}
            >
                {[...techs, ...techs].map((tech, index) => (
                    <span key={index} className="whitespace-nowrap">
                        {tech}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
}
