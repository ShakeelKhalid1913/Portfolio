import Head from 'next/head'
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import React from "react"
import Skills from "../components/Skills"
import ContactMe from "../components/ContactMe"

export default function Home() {

   return (
       <div className={"bg-[#F3f3f3] text-black h-screen snap-y snap-mandatory overflow-scroll z-0"}>
          <Head>
             <title>Portfolio</title>
          </Head>
          <Header/>
          <section id={"hero"} className={"snap-start"}>
             <Hero/>
          </section>
          <section id={"about"} className={"snap-center"}>
             <About/>
          </section>
          <section id={"skills"} className={"snap-start"}>
             <Skills/>
          </section>
          <section id={"projects"} className={"snap-center"}>
             <WorkExperience/>
          </section>
          <section id={"contact"} className={"snap-center"}>
             <ContactMe/>
          </section>
       </div>
   )
}
