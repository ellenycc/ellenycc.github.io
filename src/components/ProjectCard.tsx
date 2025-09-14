import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export type ProjectItem = {
  title: string;
  description: string;
  tools: string[];
  imageSrc: string;
  live: string;
  code: string;
};

const ProjectCard = ({ item }: { item: ProjectItem }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article className="group grid gap-8 md:grid-cols-6 pb-3">
      <div className="order-2 md:order-none md:col-span-3">
        <div
          className="relative w-full rounded-xl aspect-video"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <img
            src={item.imageSrc}
            className="absolute inset-0 h-full w-full rounded"
            alt={`${item.title}'s thumbnail`}
            loading="lazy"
            width={800}
            height={450}
          />
        </div>
      </div>
      <div
        className="order-1 md:order-none md:col-span-3"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
        <h4 className="mb-3 text-indigo-600 font-small">
          {item.tools.join(" | ")}
        </h4>
        <p className="text-md leading-6 text-gray-700 mb-3">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="inline-flex items-center rounded-2xl px-4 py-2 text-sm bg-indigo-500 text-white hover:bg-indigo-600"
            href={item.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="inline-flex items-center rounded-2xl px-4 py-2 text-sm bg-indigo-500 text-white hover:bg-indigo-600"
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
