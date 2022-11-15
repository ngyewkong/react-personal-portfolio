import React from "react";
import { motion } from "framer-motion";

type Props = {};

// animated circles motion -> tailwind css utility class animate-ping
// using a div to draw shapes
// using h-[px] make use of tailwind jit compiler
// absolute circle relative to the parent div (relative flex)
// absolute prevents each div from getting squashed up and have a layered effect
function LandingPageBackground({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1], // scale array takes the duration and assign evenly the time for each array element
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-lightinteractive dark:border-darkinteractive rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-lightinteractive dark:border-darkinteractive rounded-full h-[450px] w-[450px] mt-52 animate-ping" />
      {/* <div className="absolute border border-[#696969] rounded-full h-[500px] w-[500px] mt-52 animate-ping" /> */}
      <div className="absolute border border-lightsecondary dark:border-darksecondary opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-lightinteractive dark:border-darkinteractive rounded-full h-[900px] w-[900px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default LandingPageBackground;
