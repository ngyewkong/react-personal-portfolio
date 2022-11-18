import { motion } from "framer-motion";
import React from 'react'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-lightprimarysubtle/50 dark:bg-darkprimarysubtle/50 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden border border-lightinteractive dark:border-darkinteractive">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]" src="./dbs_logo.png" alt="dbs logo" />

            <div className="px-0 md:px-10 text-lightinline dark:text-darkinline">
                <h4 className="text-4xl font-light">Job Title</h4>
                <p className="font-bold text-2xl mt-1">Company</p>
                <div className="flex space-x-2 my-2">
                    {/* Tech stack used */}
                </div>
                <p>Started ... Ended ... </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard