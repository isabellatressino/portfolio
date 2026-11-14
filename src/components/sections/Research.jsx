import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { timeline } from "../../data/research";
import { fadeLeft, fadeUp } from "../../animations/animations";
import { useTranslation } from "react-i18next";
import Lightbox from "../utils/Lightbox";

function PhotoMosaic({ photos, fit, alt, onOpen }) {
    const photoClass =
        "group relative block w-full h-full overflow-hidden bg-text-muted/10 cursor-zoom-in";
    const imgClass = `h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] ${fit === "contain" ? "object-contain p-4" : "object-cover"
        }`;

    if (photos.length === 1) {
        return (
            <button type="button" onClick={() => onOpen(0)} className={`${photoClass} aspect-video`}>
                <img src={photos[0]} alt={alt} loading="lazy" className={imgClass} />
            </button>
        );
    }

    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-3 aspect-video">
            {photos.slice(0, 3).map((photo, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => onOpen(i)}
                    className={`${photoClass} ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                    <img
                        src={photo}
                        alt={alt}
                        loading="lazy"
                        className={`${imgClass} ${i === 0 ? "" : "object-top"}`}
                    />
                </button>
            ))}
        </div>
    );
}

function DocumentThumb({ src, label, onOpen }) {
    return (
        <button
            type="button"
            onClick={onOpen}
            className="group/doc h-auto self-start flex items-center gap-5 text-left normal-case"
        >
            <span className="relative block w-24 shrink-0">
                <span
                    aria-hidden="true"
                    className="absolute inset-0 border border-text-muted/40 bg-surface rotate-6 transition-transform duration-500 group-hover/doc:rotate-10"
                />
                <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="relative block w-full border border-text-muted/40 bg-surface shadow-md transition-transform duration-500 group-hover/doc:-rotate-3"
                />
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase text-text-main group-hover/doc:text-primary transition-colors duration-500">
                <Award aria-hidden="true" className="h-4 w-4 text-primary shrink-0" />
                {label}
            </span>
        </button>
    );
}

export default function Research() {

    const { t } = useTranslation();
    const [lightbox, setLightbox] = useState(null);

    const openGallery = (item, startIndex) => {
        const images = item.document ? [...item.photos, item.document] : item.photos;
        setLightbox({ id: item.id, images, startIndex });
    };

    return (
        <section id="research">
            <div className="max-w-300 mx-auto grid-design content-center px-8 sm:px-10 lg:px-20 2xl:px-0 pt-30 md:pt-50">
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="col-span-4 sm:col-span-8 lg:col-span-12 mb-8"
                >
                    <h2 className="text-5xl sm:text-7xl">
                        {t("research.section.title.main")}{" "}
                        <span className="text-primary">{t("research.section.title.highlight")}</span>
                    </h2>
                </motion.div>
                <motion.p
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="col-span-4 border-l-2 border-primary pl-6 mb-16 sm:col-span-6 lg:col-span-7"
                >
                    {t("research.section.intro")}
                </motion.p>

                <div className="col-span-4 sm:col-span-8 lg:col-span-12 border-b border-text-muted/40">
                    {timeline.map((item) => {
                        const key = `research.items.${item.id}`;
                        return (
                            <motion.article
                                key={item.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="border-t border-text-muted/40 py-10 flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-4"
                            >
                                <div className="flex flex-col gap-4 lg:col-span-5 lg:pr-6">
                                    <p className="uppercase font-mono text-xs text-primary">
                                        {t(`${key}.meta`)}
                                    </p>
                                    <h3>{t(`${key}.name`)}</h3>
                                    <p>{t(`${key}.description`)}</p>

                                    <div className="mt-auto pt-6 flex flex-col gap-6">
                                        {"url" in item && (
                                            <a
                                                href={item.url || undefined}
                                                aria-disabled={!item.url || undefined}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link self-start inline-flex items-center gap-1 uppercase font-display text-sm text-text-main hover:text-primary transition-colors duration-500 ease-out"
                                            >
                                                {t("research.actions.article")}
                                                <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                            </a>
                                        )}
                                        {item.document && (
                                            <DocumentThumb
                                                src={item.document}
                                                label={t(`${key}.document`)}
                                                onOpen={() => openGallery(item, item.photos.length)}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="lg:col-span-7">
                                    <PhotoMosaic
                                        photos={item.photos}
                                        fit={item.fit}
                                        alt={t(`${key}.alt`)}
                                        onOpen={(i) => openGallery(item, i)}
                                    />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {lightbox && (
                    <Lightbox
                        images={lightbox.images}
                        startIndex={lightbox.startIndex}
                        caption={t(`research.items.${lightbox.id}.caption`)}
                        alt={t(`research.items.${lightbox.id}.alt`)}
                        onClose={() => setLightbox(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
