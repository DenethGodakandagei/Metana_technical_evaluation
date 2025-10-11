"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WelcomeScreen from "./components/WelcomeScreen";
import Image from "next/image"; 


export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100  ">
    <div ref={containerRef} className="h-[95%] flex content-center items-center justify-center">
     
      <WelcomeScreen />
    
    </div>
    <div className=" content-center font-bold justify-center flex text-gray-300">
       <Image
            src="/assets/gray-logo.png" 
            alt="Logo"
            width={42}
            height={42}
            className="inline-block"
          /><span className="p-1"> SONOLA</span></div>
    </div>
  );
}
