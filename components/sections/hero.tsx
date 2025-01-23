"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { FlipWords } from "../ui/flip-words"
import React from "react"
import { Button } from "../ui/button"
import { Github, Linkedin } from "lucide-react"
 


function Hero() {

  const {theme} = useTheme() 
  
  return (
    
    <div className=" h-full sm:h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.4] relative flex items-center justify-center flex-col md:flex-row">
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}

      <div className=" flex flex-col justify-center text-center h-full w-full mt-16 md:mt-0">
          <span className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wider text-nowrap">Hello, I&apos;m sachin<span className="text-yellow-400">👋</span></span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wider bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent text-nowrap"> Full Stack Developer</span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wider ">with <span className="bg-gradient-to-r from-yellow-200 to-pink-400 rounded-lg text-white px-2 text-nowrap"><FlipWords words={["React.js","Next.js","Node.js","React Native"]} /> <br /></span></span>
          <span className="font-light text-gray-400 text-xs md:text-sm  px-20 mt-5">A creative full stack web developer, I blend front-end elegance with back-end power to craft engaging and dynamic web experiences. My aim is to turn innovative ideas into captivating digital solutions.</span>

          <div className="flex justify-center mt-5 space-x-5">
            <Button variant={"outline"} className="px-12 py-6 text-lg hover:bg-black hover:text-white"><Github size={30}/></Button>
            <Button variant={"outline"} className="px-12 py-6 hover:bg-sky-600 "><Linkedin /></Button>
          </div>
      </div>

      <div className=" flex items-center justify-center rounded-full h-full w-full mt-7 md:mt-1">
          <Image src="/mky.png" alt={"profile image"} width={270} height={270} className={` flex items-center justify-center border-[7px] rounded-full ${ theme === "light" ?"border-black":"border-white"} sm:w-[350] sm:h-[350] `}/>
      </div>

    </div>
  )
}

export default Hero