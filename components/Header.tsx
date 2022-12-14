import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import DarkModeSwitcher from "./DarkModeSwitcher";

type Props = {};

function Header({ }: Props) {
  return (
    // mx-auto sets margin at the sides
    <header
      className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto"
      style={{ zIndex: 10 }}
    >
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

        <SocialIcon
          className="cursor-pointer"
          network="email"
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
        <DarkModeSwitcher />
      </motion.div>
    </header>
  );
}

export default Header;
