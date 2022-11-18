import React from 'react';
import Skill from './Skill';
import { motion } from "framer-motion";

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-lightinline dark:text-darkinline text-2xl'>Skills</h3>
            <h3 className='absolute top-32 uppercase tracking-[3px] text-lightinline dark:text-darkinline text-sm'>Hover for skill </h3>

            {/* Skills Icon layer */}
            <div className='grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />

                <Skill />
                <Skill />
                <Skill />
                <Skill />

                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}

export default Skills