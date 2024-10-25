import { useEffect, useRef } from "react";
import {PROFILE} from "../constants"
import { RiArrowRightUpLine } from "@remixicon/react";
import rabab from "../assets/rabab.jpg";

const Hero = () => {
    const heroRef = useRef(null);



  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4 lg:gap-6" ref={heroRef} id="hero">
        <div className="mt-20 lg:mt-20">
           <h1 className="mb-4 text-4xl text-center hero-title lg:text-7xl">{PROFILE.name}</h1>
           <h2 className="text-2xl tracking-tighter text-center text-transparent hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text">{PROFILE.role}</h2>
        </div>
        <p className="max-w-2xl mx-5 text-xl tracking-tighter text-center hero-text lg:text-2xl">{PROFILE.subheading}</p>

        <a href="/public/RABAB-developer.pdf" target="_blank" rel="noopener noreferrer" download className="flex gap-1 px-3 py-2 mb-6 tracking-tighter border rounded-full hero-btn border-pink-200/50">
        <span>download resume</span>
        <RiArrowRightUpLine/>
         
        </a> 
    <img src={rabab}  alt={PROFILE.name} width={400} height="400" className="p-1 border hero-img rounded-3xl border-purple-400/20" />
</section>
  )
}

export default Hero
