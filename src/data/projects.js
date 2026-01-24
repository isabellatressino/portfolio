import searchAndAIMeetupImg from "../assets/images/projects/search-and-ai-meetup.png"
import planifyAI from "../assets/images/projects/planify-ai.png"

export const projects = [
    {
        id: "search_ai_meetup",
        technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        imgUrl: searchAndAIMeetupImg,
        liveDemo: "https://search-ai-meetup-br.github.io/site/",
        repo: "https://github.com/search-ai-meetup-br/site"
    },
    {
        id: "planify_ai",
        technologies: ["React", "Node", "OpenAI API", "MongoDB", "Firebase Auth", "Express", "Prisma ORM", "Tailwind CSS", "Axios"],
        imgUrl: planifyAI,
        liveDemo: "https://planify-ai-navy.vercel.app/",
        repo: "https://github.com/isabellatressino/planify-ai"
    }
];
