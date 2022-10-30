import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    // mx-auto sets margin at the sides
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto">
      {/* Using Framer Motion for animations */}
      {/* motion.div as the component */}
      {/* initial: starting properties for the animation */}
      {/* animate: end state of the animation */}
      {/* transition: timing (in s) and setup */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/ngyewkong"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/ngyewkong"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/yewkongng"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=WNS9sgk3SWKDwyM4LpPkOg"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* tailwindcss utility works from smallest to largest screensize */}
        {/* hidden -> mobile screen hide the text */}
        {/* uppercase md:inline-flex text-sm text-gray-400 -> medium screen size show text in uppercase, small font and gray color */}
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch!
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
