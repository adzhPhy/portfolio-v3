"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Gauge, Gamepad } from "lucide-react";
import { GiGalaxy } from "react-icons/gi";
import Link from "next/link";

const Navbar = ({}) => {
  const [toggledMenu, setToggledMenu] = useState(false);
  // to prevent Hydration Mismatch
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      onClick={() => {
        if (toggledMenu) {
          setToggledMenu(!toggledMenu);
        } else {
          return null;
        }
      }}
      className="sticky w-3/4 flex justify-center md:justify-between items-center px-4 py-2 border-y-2 border-th-tertiary rounded-xl"
    >
      <div className="bg-slate-200 flex flex-row justify-center items-center gap-2">
        <Image
          src="/images/adzhalogo.png"
          alt="Portfolio Logo"
          width={128}
          height={128}
          style={{ background: "white", borderRadius: "20%", opacity: 0.65 }}
          className="xxs:max-md:hidden"
        />
        <a
          aria-label="linkedIn"
          href="https://linkedin.com/in/ali-dzhan-ali-226490235"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-linkedin text-th-tertiary"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a aria-label="github" href="https://github.com/adzhPhy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-github text-th-tertiary"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
      </div>
      <div className="navs flex flex-row justify-center items-center text-th-tertiary">
        {/* Dropdown Menu */}
        <div className="dropdown min-w-fit relative m-1">
          <div className="select hover:bg-th-primary flex justify-between items-center rounded-lg p-1 cursor-pointer transition-all duration-300">
            <div
              onClick={() => setToggledMenu(!toggledMenu)}
              className="selected"
            >
              {theme === "light" && <Gamepad size={32} />}
              {theme === "dark1" && <Gauge size={32} />}
              {theme === "dark2" && <GiGalaxy size={32} />}
            </div>
          </div>
          {toggledMenu && (
            <ul className="menu absolute bg-th-background text-th-background">
              <li onClick={() => setTheme("light")} className="light">
                <Gamepad size={32} />
                Arcade
              </li>
              <li onClick={() => setTheme("dark1")} className="dark1">
                <Gauge size={32} />
                Neon
              </li>
              <li onClick={() => setTheme("dark2")} className="dark2">
                <GiGalaxy size={32} />
                Galactic
              </li>
            </ul>
          )}
        </div>
        <div className="nav-list flex gap-4 m-4 font-semibold flex-wrap">
          <Link
            className="rounded-lg hover:underline underline-offset-4"
            href="#home"
            onClick={handleScroll}
          >
            Home
          </Link>
          <Link
            onClick={handleScroll}
            className="hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            onClick={handleScroll}
            className="hover:underline underline-offset-4"
            href="#work"
          >
            Work
          </Link>
          <Link
            onClick={handleScroll}
            className="hover:underline underline-offset-4"
            href="#skills"
          >
            Skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
