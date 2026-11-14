import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Lightbox({ images, startIndex = 0, caption, alt, onClose }) {

    const { t } = useTranslation();
    const [index, setIndex] = useState(startIndex);
    const total = images.length;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
            if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
        };
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = overflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose, total]);

    const navButton =
        "inline-flex items-center justify-center h-10 w-10 border border-white/40 text-white hover:bg-primary hover:border-primary transition-colors duration-300";

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-70 bg-black/90 flex flex-col items-center justify-center gap-6 px-4 py-10"
        >
            <button
                type="button"
                onClick={onClose}
                aria-label={t("research.lightbox.close")}
                className={`absolute top-4 right-4 ${navButton}`}
            >
                <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <motion.img
                key={index}
                src={images[index]}
                alt={alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[75vh] max-w-full object-contain"
            />

            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-6 text-white max-w-3xl w-full justify-between"
            >
                <p className="font-mono text-xs uppercase text-white/80">
                    {caption}
                </p>
                {total > 1 && (
                    <div className="flex items-center gap-3 shrink-0">
                        <button type="button" onClick={prev} aria-label={t("research.lightbox.prev")} className={navButton}>
                            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
                        </button>
                        <span className="font-mono text-xs">{index + 1} / {total}</span>
                        <button type="button" onClick={next} aria-label={t("research.lightbox.next")} className={navButton}>
                            <ArrowRight aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
