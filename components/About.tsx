import React from "react";
import { motion } from "framer-motion";
import icon from "../public/icon.png";

type Props = {};

function About({ }: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-lightinline dark:text-darkinline text-2xl">
        About
      </h3>
      <motion.img
        src="/icon.png"
        initial={{
          x: -200,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="-mb-20 md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 
        xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-lightinline dark:text-darkinline">
          here is a <span>little</span> background
        </h4>
      </div>
    </div>
  );
}

export default About;
