import React from 'react'
import {motion} from "framer-motion"

function Skill(props) {
   return (
       <div className={"group relative flex cursor-pointer "}>
          <motion.img
               initial={{
                  x: props.directionLeft? -100: 200,
                  opacity: 0
               }}
               transition={{
                  duration:1
               }}
               whileInView={{
                  opacity:1, x:0
               }}
               className={"rounded-full w-24 h-24 border-gray-500 object-cover md:h-28 md:w-28 filter group-hover:grayscale transition duration-300 ease-in-out"}
               src={"https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"}
          />
          <div className={"absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 " +
              "rounded-full z-0 md:h-28 md:w-28"}>
             <div className={"flex justify-center items-center h-full"}>
                <p className={"text-3xl"}>100%</p>
             </div>
          </div>
       </div>
   )
}

export default Skill