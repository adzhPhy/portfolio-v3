import { AboutProps } from "@/data/client";
import { urlFor, getAbouts } from "@/data/client";
import Image from "next/image";

const About = ({ abouts }: { abouts: AboutProps[] }) => {
  return (
    <div
      id="about"
      className="w-3/4 min-w-fit flex flex-col justify-center items-center border-y-2 border-th-tertiary rounded-xl"
    >
      <div className="max-w-fit flex flex-col md:flex-row flex-wrap align-center place-items-center mt-4 xxs:gap-4">
        <h4 className="glitch font-serif text-5xl font-extrabold justify-self text-center text-th-primary italic">
          <span className="text-th-tertiary text-5xl bold">Audentes</span>
          <br />
          Fortuna iuvat
        </h4>
        <h4 className="glitch font-serif text-5xl font-extrabold justify-self text-center text-th-primary italic">
          Luck favours
          <br />
          <span className="text-th-tertiary text-5xl bold">the Bold</span>
        </h4>
      </div>
      <div className="hide-content flex justify-center items-start flex-wrap mt-8 mb-4 pb-6">
        {abouts?.map((about: AboutProps) => (
          <div
            key={about.title}
            className="hover-animation-card w-64 flex justify-start rounded-md items-start flex-col m-4 hover:rounded-lg shadow-lg hover:shadow-th-tertiary"
          >
            <Image
              src={urlFor(about.imgUrl).url()}
              alt={about.title}
              width={256}
              height={256}
              style={{
                width: "auto",
                objectFit: "cover",
                background: "white",
                borderTop: "15px",
                borderRadius: "8px",
              }}
            />
            <div className="m-2 bg-th-background font-mono">
              <h2 className="text-lg font-extrabold text-th-tertiary text-left mt-2">
                {about.title}
              </h2>
              <p className="text-md font-semibold text-left text-th-tertiary leading-6 mt-2.5">
                {about.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
