import { motion } from "framer-motion";

export function NavItem({ href, children }) {
  return (
    <motion.li
      className="relative"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <a href={href} className="hover:text-text-main transition-colors duration-300">{children}</a>

      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left"
      />
    </motion.li>
  );
}
