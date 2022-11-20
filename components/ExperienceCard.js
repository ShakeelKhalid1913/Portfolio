import React from 'react'
import {motion} from "framer-motion"
import {SocialIcon} from "react-social-icons"

function ExperienceCard(props) {
   return (
       <article
           className="items-center snap-center mt-100 p-10 flex flex-col rounded-lg
               space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] hover:opacity-100 opacity-40 cursor-pointer
               transition-opacity duration-200 overflow-hidden shadow-2xl">
          <motion.img
              initial={{
                 y: -100,
                 opacity: 0
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src={"https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"}
              className={"rounded-full w-20 h-20 xl:w-[100px] xl:h-[100px] object-cover object-center"}/>
          <div className={"px-0 md:px-10"}>
             <h1 className={"text-4xl font-light"}>Flutter Developer</h1>
             <div className={"space-x-2 flex my-2"}>
                <SocialIcon network={"pinterest"} className={"h-10 w-10"}/>


             </div>
             <p>Started.... - Ended....</p>
             <ul className={"list-disc space-y-4 ml-5 text-lg"}>
                <li>Summary Summary Summary Summary Summary Summary Summary pl</li>
                <li>Summary Summary Summary Summary Summary Summary Summary pl</li>
                <li>Summary Summary Summary Summary Summary Summary Summary pl</li>
                <li>Summary Summary Summary Summary Summary Summary Summary pl</li>

             </ul>
          </div>
       </article>
   )
}

export default ExperienceCard