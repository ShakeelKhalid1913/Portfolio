import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"

function Header(props) {
   return (
       <header className={"sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center p-5"}>
          <motion.div
              initial={{
                 x: -500,
                 opacity: 0,
                 scale: 0.5
              }}
              animate={{
                 x: 0,
                 opacity: 1,
                 scale: 1
              }}
              transition={{
                 duration: 1.5
              }}

              className={"flex flex-row items-center"}>
             <SocialIcon url={"https://facebook.com/"} bgColor={"transparent"} fgColor={"gray"}/>
             <SocialIcon url={"https://instagram.com/"} bgColor={"transparent"} fgColor={"gray"}/>
             <SocialIcon url={"https://twitter.com/"} bgColor={"transparent"} fgColor={"gray"}/>
             <SocialIcon url={"https://github.com/"} bgColor={"transparent"} fgColor={"gray"}/>
             <SocialIcon url={"https://linkedin.com/"} bgColor={"transparent"} fgColor={"gray"}/>
          </motion.div>
          <motion.div
              initial={{
                 x: 500,
                 opacity: 0,
                 scale: 0.5
              }}
              animate={{
                 x: 0, opacity: 1, scale: 1
              }}
              transition={{
                 duration:1.5
              }}
          >
             <SocialIcon className={"cursor-pointer"} network={"email"} bgColor={"transparent"} fgColor={"gray"}/>
             <p className={"uppercase hidden md:inline-flex text-sm text-gray-400"}>Get in Touch</p>
          </motion.div>
       </header>
   )
}

export default Header