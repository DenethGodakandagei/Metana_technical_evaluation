"use client";

import WelcomeScreen from "./components/WelcomeScreen";
import Image from "next/image"; 


export default function HomePage() {
 
  return (
    <div className="w-full h-screen bg-[#f9f9f9] dark:bg-[#424242] ">
    <div className="h-[95%] flex content-center items-center justify-center">
     
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
