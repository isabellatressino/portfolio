import waterCertificate from "../assets/images/research/water-mdpi-certificado.jpg"
import sustentare2025Photo from "../assets/images/research/sustentare-2025.jpg"
import sustentare2025Certificate from "../assets/images/research/sustentare-2025-certificado.jpg"
import ciw2026Photo1 from "../assets/images/research/ciw-2026-1.jpg"
import ciw2026Photo2 from "../assets/images/research/ciw-2026-2.jpg"
import ciw2026Photo3 from "../assets/images/research/ciw-2026-3.jpg"
import ciw2026Declaration from "../assets/images/research/ciw-2026-declaracao.jpg"

// Entradas da seção em ordem cronológica (mais antiga primeiro).
// photos: mosaico à direita · document: miniatura do certificado/declaração
// fit "contain": mostra a imagem inteira (ex.: certificado do artigo)
// url: link do artigo (DOI)
export const timeline = [
    {
        id: "sustentare_2025",
        photos: [sustentare2025Photo],
        document: sustentare2025Certificate
    },
    {
        id: "water_article",
        photos: [waterCertificate],
        fit: "contain",
        document: null,
        url: "https://doi.org/10.3390/w18121459"
    },
    {
        id: "ciw_2026",
        photos: [ciw2026Photo1, ciw2026Photo2, ciw2026Photo3],
        document: ciw2026Declaration
    }
];
