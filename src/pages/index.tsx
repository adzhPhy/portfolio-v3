import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </main>
  );
}
