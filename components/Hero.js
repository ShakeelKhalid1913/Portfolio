import React from 'react'
import {useTypewriter, Cursor} from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"
import Image from '../public/images/natalia-koc-7_rGUtapFdo-unsplash.jpg'
import Link from "next/link"
import {motion} from "framer-motion"

function Hero(props) {
      const [text] = useTypewriter({
      words: [
         "Freelancer",
         "Designer",
         "Mobile App Developer",
         "Web App Developer",
         "Desktop App Developer"
      ],
      loop: true,
      delaySpeed: 2000
   })

   return (
       <div className={"h-screen flex flex-col space-y-8 text-center items-center justify-center overflow-hidden"}>
          <BackgroundCircle/>
          <img
              className={"relative rounded-full h-32 w-32 mx-auto object-cover"}
               src={"https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"}
               alt={"Me"}/>
          <div className={"z-10"}>
             <h1 className={"text-gray-500 text-5xl"}>Shakeel Khalid</h1>
             <h2 className={" uppercase text-sm text-gray-500 pb-2 tracking-[15px]"}>Software Engineer</h2>
             <h1 className={"text-5xl lg:text-6xl font-semibold scroll-px-10"}>
                I'm a <span className={"text-transparent bg-clip-text bg-gradient-to-r to-[#2BBB73] from-sky-500"}>{text}</span>
                <Cursor cursorColor={"#2BBB73"}/>
             </h1>
             <div className={"pt-10"}>
                <Link href={"#about"}>
                   <motion.button
                       whileHover={{scale:1.1}}
                       whileTap={{scale: 0.9}}
                       className={"heroButton"}>About</motion.button>
                </Link>
                <Link href={"#skills"}>
                   <motion.button
                       whileHover={{scale:1.1}}
                       whileTap={{scale: 0.9}}
                       className={"heroButton"}>Skills</motion.button>
                </Link>
                <Link href={"#experience"}>
                   <motion.button
                       whileHover={{scale:1.1}}
                       whileTap={{scale: 0.9}}
                       className={"heroButton"}>Experience</motion.button>
                </Link>
                <Link href={"#contact"}>
                   <motion.button
                       whileHover={{scale:1.1}}
                       whileTap={{scale: 0.9}}
                       className={"heroButton"}>Contact</motion.button>
                </Link>
             </div>
          </div>
       </div>
   )
}

export default Hero