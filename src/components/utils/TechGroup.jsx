import { motion } from "framer-motion";
import { techGroup, techItem } from "../../animations/animations";

export default function TechGroup({ title, items, highlight = false }) {
  return (
    <motion.div
      variants={techGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <h3
        className={`text-3xl border-t-2 border-text-main pt-4 mb-2 ${highlight ? "text-primary" : "text-text-main"
          }`}
      >
        {title}
      </h3>

      <motion.ul
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <li
            key={item}
            className={`py-4 font-mono uppercase ${index !== 0 ? "border-t border-text-muted" : ""
              }`}
          >
            <motion.span
              variants={techItem}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block cursor-default w-full"
            >
              {item}
            </motion.span>
          </li>
        ))}
      </motion.ul>

    </motion.div>
  );
}
