import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-lightinline dark:text-darkinline text-2xl">
        About
      </h3>
      <div className="relative top-14 md:top-0 h-56 w-56">
        <motion.img
          src="/me.jpg"
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1, }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="-mb-20 md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 absolute opacity-100 hover:opacity-0
        xl:w-[500px] xl:h-[600px]"
        />
        <motion.img src="/icon.png" className="-mb-20 md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 absolute opacity-0 hover:opacity-100 
        xl:w-[500px] xl:h-[600px]" />
      </div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="relative text-4xl font-semibold text-lightinline dark:text-darkinline">
          Here is a <span className="underline decoration-lightsecondary/50 text-lightsecondary dark:text-darksecondary dark:decoration-darksecondary/50">little</span> background
        </h4>

        <p className="relative text-base max-w-full text-lightinline dark:text-darkinline">
          I am Yew Kong. I am a Software Developer and have graduated with a Bachelor of Engineering (Honours) in Mechanical Engineering.

          I am interested in Web Development especially in area of Front-End development. I am also interested in Artificial Intelligence, particularly in areas of Computer Vision and Reinforcement Learning. I have past research experience with using AI in the healthcare domain.

          I am currently a Java Spring Developer working on credit card mainframe migration (cloud-native solution). I am also familiar with the MERN stack.

        </p>
      </div>
    </motion.div>
  );
}

export default About;
