import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer id="footer" className="bg-surface border-t border-text-muted/20">
            <div className="max-w-300 mx-auto grid-design content-center px-8 sm:px-10 lg:px-20 2xl:px-0 py-8">
                <h4 className="col-span-4 text-2xl mx-auto sm:mx-0 lg:col-start-1 lg:row-start-1 lg:col-span-6">
                    Isabella <span className="text-gradient">Tressino</span>
                </h4>
                <a href="mailto:tressinoisabella@gmail.com" className="text-sm col-span-4 font-mono mx-auto sm:text-base sm:mx-0 sm:col-start-1 lg:col-start-1 lg:col-span-6 hover:text-primary transition-all ease-out duration-500" aria-label="Email">tressinoisabella@gmail.com</a>
                <div className="col-span-4 gap-2 flex flex-col uppercase font-display items-center mt-8 sm:mt-0 sm:row-start-1 sm:col-start-5 sm:items-end sm:row-span-2 lg:col-start-7 lg:col-span-6 lg:row-span-2 lg:row-start-1">
                    <a href="https://github.com/isabellatressino" target="_blank" rel="noopener noreferrer" className="hover:text-text-main cursor-pointer transition-all duration-500" aria-label="Github">Github</a>
                    <a href="https://www.linkedin.com/in/isabellatressino" target="_blank" rel="noopener noreferrer" className="hover:text-text-main cursor-pointer transition-all duration-500" aria-label="Linkedin">Linkedin</a>
                </div>
                <hr role="separator" className="col-span-4 mt-8 border-text-muted/30 sm:col-span-8 lg:col-span-12"></hr>
                <p className="col-span-4 text-xs mt-2 mx-auto sm:col-span-8 lg:col-span-12">© 2026 Isabella Tressino. {t("footer.rights")}</p>
            </div>
        </footer>
    )
}