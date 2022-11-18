import React from 'react';
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 1.0 }}
                whileInView={{ x: 0, opacity: 1 }}
                src="./ts_logo.png"
                className='rounded-full border border-lightprimarysubtle dark:border-darkprimarysubtle object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-lightprimarysubtle w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 dark:group-hover:bg-darkprimarysubtle rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-lightinline dark:text-darkinline opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill