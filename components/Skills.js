import React from 'react'
import {motion} from "framer-motion"
import Skill from "./Skill"

function Skills(props) {
   return (
       <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}}
                   className={"h-screen flex flex-col relative text-center md:text-start md:flex-row max-w-7xl justify-evenly px-10 items-center mx-auto"}>
          <h1 className={"uppercase top-24 absolute tracking-[20px] text-gray-500 text-2xl"}>Skills</h1>
          <h3 className={"absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"}>Hover over a skill for
             current proficiency</h3>

          <div className={"grid grid-cols-4 gap-5"}>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill directionLeft={true}/>
             <Skill/>
             <Skill/>

          </div>
       </motion.div>
   )
}

export default Skills