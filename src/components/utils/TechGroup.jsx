export default function TechGroup({ title, items, highlight = false }) {
    return (
        <div>
            <h3 className={`text-3xl border-t-2 border-text-main pt-4 mb-2 ${highlight ? "text-primary" : "text-text-main"}`}>
                {title}
            </h3>

            <ul className="flex flex-col">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`py-4 font-mono uppercase ${index !== 0 ? "border-t border-text-muted" : ""}`}>
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    );
}
