import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from "./ExperienceCard"

function WorkExperience(props) {
   return (
       <motion.div
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           transition={{duration: 1.2}}
           className={"h-screen flex flex-col relative md:text-start md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"}>
          <h3 className={"uppercase overflow-hidden tracking-[20px] absolute text-gray-500 top-24 text-2xl"}>Experience</h3>

          <div className={"w-full md:mt-20 sm:mt-[100px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"}>
             <ExperienceCard/>
             <ExperienceCard/>
             <ExperienceCard/>
          </div>
       </motion.div>
   )
}

export default WorkExperience