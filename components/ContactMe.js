import React from 'react'
import {motion} from "framer-motion"

function ContactMe(props) {
   return (
       <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}}
                   className={"h-screen flex flex-col relative text-center md:text-start md:flex-row max-w-7xl justify-evenly px-10 items-center mx-auto"}>
          <h1 className={"uppercase top-24 absolute tracking-[20px] text-gray-500 text-2xl"}>Contact</h1>
       </motion.div>
   )
}

export default ContactMe