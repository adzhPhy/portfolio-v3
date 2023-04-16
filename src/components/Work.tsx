"use client";
import { useState } from "react";
import { WorkProps, urlFor } from "@/data/client";
import Image from "next/image";
import { Link, Github } from "lucide-react";

const Work = ({ works }: { works: WorkProps[] }) => {
  const workTags = [
    "Productivity App",
    "Portfolio App",
    "SPA",
    "Social Media App",
    "All",
  ];

  const [filterWorks, setFilterWorks] = useState(works);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleWorkFilter = (tag: string) => {
    setActiveFilter(tag);
    setTimeout(() => {
      if (tag === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(tag)));
      }
    }, 200);
  };

  return (
    <div
      id="work"
      className="hide-content xxs:max-md:w-full w-3/4 flex-col flex justify-center items-center border-y-2 border-th-tertiary rounded-xl"
    >
      <h2 className="text-4xl font-extrabold text-th-tertiary text-left mt-8 mb-4">
        Projects
      </h2>
      <div className="flex flex-row flex-auto justify-center md:justify-start items-center flex-wrap mx-16 mt-0 mb-8 gap-4">
        {workTags.map((tag: string) => (
          <div
            key={tag}
            onClick={() => handleWorkFilter(tag)}
            className="px-1 py-2 text-th-background rounded-md bg-th-tertiary hover:shadow-md hover:shadow-th-primary font-extrabold flex justify-center items-center cursor-pointer transition-all ease-in-out delay-150 duration-150 hover:delay-150 text-sm text-left leading-6"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="work-cards grid grid-cols-1 md:flex md:flex-row md:flex-wrap justify-center items-center mb-24 transition-all">
        {filterWorks?.map((work: WorkProps) => (
          <div
            key={work.title}
            className="work-card work-card-animation flex flex-col justify-center items-center transition-all"
          >
            <div className="flex justify-center items-center w-64 m-8 p-4 flex-col rounded-lg bg-gradient-to-b from-th-secondary to-th-tertiary cursour-pointer hover:shadow-lg hover:shadow-th-primary transition-all">
              <div className="flex justify-center items-center w-full h-64 relative">
                <Image
                  src={urlFor(work.imgUrl).url()}
                  alt={`${work.title}`}
                  width={256}
                  height={256}
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "cover",
                    background: "white",
                  }}
                />
                <div className="flex justify-center items-center absolute top-0 left right-0 bottom-0 w-full h-full rounded-lg work-link">
                  <div className="gap-3 flex flex-row">
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <div className="flex justify-center items-center">
                        <Link size={42} />
                      </div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <div className="flex justify-center items-center">
                        <Github size={42} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center p-2 w-full relative flex-col">
                <div className="work-tag flex justify-center items-center px-1 py-0 border-2 rounded-lg bg-gradient-to-t from-th-secondary to-th-primary">
                  <p className="text-sm font-mono font-bold text-left text-th-tertiary leading-6">
                    {work.tags}
                  </p>
                </div>
                <h4 className="text-lg font-mono underline font-extrabold text-th-primary text-center mt-4 mb-4 mt-2 leading-6">
                  {work.title}
                </h4>
                <p className="text-md font-mono font-semibold text-center text-th-primary leading-5 mt-1">
                  {work.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-evenly items-start gap-10">
              {work.images.map((image) => (
                <div
                  key={image}
                  className="flex flex-wrap justify-center items-center w-6 h-6 rounded-full shadow-lg shadow-th-primary"
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={image.alt}
                    width={52}
                    height={52}
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      objectFit: "cover",
                      position: "absolute",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
