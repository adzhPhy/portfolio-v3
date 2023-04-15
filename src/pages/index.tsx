import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import {
  AboutProps,
  SkillProps,
  WorkProps,
  getAbouts,
  getSkills,
  getWorks,
} from "@/data/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  abouts,
  works,
  skills,
}: {
  abouts: AboutProps[];
  works: WorkProps[];
  skills: SkillProps[];
}) {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <Header />
      <About abouts={abouts} />
      <Work works={works} />
      <Skills skills={skills} />
    </main>
  );
}

export async function getStaticProps() {
  const abouts = await getAbouts();
  const works = await getWorks();
  const skills = await getSkills();
  return {
    props: {
      abouts,
      works,
      skills,
    },
  };
}
