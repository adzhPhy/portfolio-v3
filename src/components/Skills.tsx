import { SkillProps, urlFor } from "@/data/client";
import Image from "next/image";

const Skills = ({ skills }: { skills: SkillProps[] }) => {
  return (
    <div
      id="skills"
      className="hide-content border-t-2 border-th-tertiary rounded-xl w-full md:w-3/4 flex-col flex justify-center items-center"
    >
      <h2 className="text-4xl font-extrabold text-th-tertiary text-left mt-8 mb-4">
        Skills
      </h2>
      <div className="w-4/5 m-10 flex flex-col w-full h-full transition-all">
        <div className="grid grid-cols-2 md:flex justify-center items-center flex-1 gap-4">
          {skills.map((skill: SkillProps) => (
            <div
              key={skill.name}
              className="skills-icon-animation flex justify-between items-center flex-col text-center m-2"
            >
              <div className="flex flex-col justify-center items-center w-28 h-28 rounded-full shadow-lg hover:shadow-lg hover:shadow-th-tertiary bg-gradient-to-r from-th-primary to-th-secondary">
                <Image
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                  width={56}
                  height={56}
                />
              </div>
              <p className="text-lg font-mono font-extrabold text-center text-th-tertiary mt-2 leading-6 ">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
