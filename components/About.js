import React from 'react'
import {motion} from "framer-motion"

function About(props) {
   return (
       <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}
           className={"h-screen flex flex-col relative text-center md:text-start md:flex-row max-w-7xl justify-evenly px-10 items-center mx-auto"}>
          <h1 className={"uppercase top-24 absolute tracking-[20px] text-gray-500 text-2xl"}>About</h1>
          <motion.img initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: true}}
                      transition={{duration: 1.2}}
                      className={"-mb-20 md:mb-0 flex-shrink-0 " +
                          "rounded-full h-32 w-32 md:rounded-lg md:w-64 md:h-95 object-cover " +
                          "xl:w-[400px] xl:h-[500px]"}
                      src={"https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"}
                      alt={"Me"}
          />
          <div className={"space-y-10 px-0 md:px-10"}>
             <h4 className={"text-4xl font-semibold"}>Here is <span
                 className={"underline decoration-[#2BBB73]"}>little</span> background</h4>
             <div className={"grid grid-rows-4 grid-cols-6 gap-4"}>
                <div className={"col-span-2"}>
                   <p><span className={"text-[#2BBB73]"}>AOKAO</span><strong>Name:</strong> Shakeel</p>
                </div>
                <div className={"col-span-2 row-span-1"}>
                   <p>Name: Shakeel</p>
                </div>
             </div>
          </div>
       </motion.div>
   )
}

export default About