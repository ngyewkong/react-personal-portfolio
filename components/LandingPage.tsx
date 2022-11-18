import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import LandingPageBackground from "./LandingPageBackground";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/me.jpg";

type Props = {};

// useTypewriter hook takes in words array, looping condition, duration delaySpeed
// to do animation withh typewriter feels
function LandingPage({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<div> Hi, I'm Yew Kong. </div>",
      "A-Self-Taught-Developer.tsx",
      "An-Applied-AI-Enthusiast.py",
      "A-Budding-Coffee-Brewer.java",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <LandingPageBackground />
      {/* need a div to hold the position height width margin for the Image component from Next.js 13 and above */}
      <div className="relative h-32 w-32 mx-auto">
        <Image
          className="rounded-full object-contain"
          src={profilePic}
          alt="Profile Picture"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-lightinline dark:text-darkinline pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="text-lightinline dark:text-darkinline">{text}</span>
          <span className="text-lightsecondary dark:text-darksecondary"><Cursor /></span>

        </h1>

        <div className="pt-5 text-lightinline dark:text-darkinline">
          {/* using Link from Next.js to create pre-rendered destinations clickable link */}
          {/* creating your own tailwind utility classes */}
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
