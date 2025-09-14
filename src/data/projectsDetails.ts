import { type ProjectItem } from "../components/ProjectCard";

export const projects: ProjectItem[] = [
  {
    title: "Ellen's Portfolio",
    description:
      "My portfolio website is fully responsive and built with React, TypeScript and Tailwind CSS.",
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    imageSrc: "/ng-painting-database.png",
    live: "https://ng-paintingdatabase.streamlit.app/",
    code: "https://github.com/ellenycc/ngscraper-ui",
  },
  {
    title: "National Gallery Painting Resolution Database",
    description:
      "A web app built for the Digital team at the National Gallery to view, search, and update the resolution details of the Gallery's collection.",
    tools: [
      "Python",
      "Requests",
      "Pandas",
      "Pytest",
      "BeautifulSoup",
      "Streamlit",
    ],
    imageSrc: "/ng-painting-database.png",
    live: "https://ng-paintingdatabase.streamlit.app/",
    code: "https://github.com/ellenycc/ngscraper-ui",
  },
  {
    title: "Travelog",
    description:
      "A social travel blog platform that allows users to share their travel stories, following each other, and saving posts to read later.",
    tools: ["Django", "PostgreSQL", "Bootstrap", "DigitalOcean"],
    imageSrc: "/travelog.png",
    live: "https://www.travelogforall.com/",
    code: "https://github.com/ellenycc/travelog",
  },
  {
    title: "BookHub",
    description:
      "A book discovery app that allows users to search books by keywords and save books to wishlist.",
    tools: ["React.js", "TypeScript", "Google Book API", "Chakra UI"],
    imageSrc: "/bookhub-demo.gif",
    live: "https://book-hub-nu-five.vercel.app/",
    code: "https://github.com/ellenycc/book-hub",
  },
  {
    title: "Retro Snake Game",
    description: "A retro game built with HTML, CSS and JavaScript",
    tools: ["HTML", "CSS", "JavaScript"],
    imageSrc: "/snakegame-demo.gif",
    live: "https://snake-game-js-ellen.netlify.app/",
    code: "https://github.com/ellenycc/snake-game",
  },
];
