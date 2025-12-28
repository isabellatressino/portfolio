export default function Footer() {
    return (
        <section className="grid-design p-8 sm:px-10 lg:px-20">
            <h4 className="col-span-4 text-2xl mx-auto sm:mx-0 lg:col-start-1 lg:row-start-1 lg:col-span-6">
                Isabella <span className="text-gradient">Tressino</span>
            </h4>

            <span className="text-sm col-span-4 font-mono mx-auto sm:text-base sm:mx-0 sm:col-start-1 lg:col-start-1 lg:col-span-6">tressinoisabella@gmail.com</span>

            <div className="col-span-4 gap-2 flex flex-col uppercase font-display items-center mt-8 sm:mt-0 sm:row-start-1 sm:col-start-5 sm:items-end sm:row-span-2 lg:col-start-7 lg:col-span-6 lg:row-span-2 lg:row-start-1">
                <a href="#" className="hover:text-text-main cursor-pointer transition-all duration-500">Github</a>
                <a href="#" className="hover:text-text-main cursor-pointer transition-all duration-500">Linkedin</a>
            </div>

            <hr className="col-span-4 mt-8 border-text-muted/30 sm:col-span-8 lg:col-span-12"></hr>
            <span className="col-span-4 text-xs mt-2 mx-auto sm:col-span-8 lg:col-span-12">© 2025 Isabella Tressino. Design & desenvolvimento próprios</span>
        </section>
    )
}