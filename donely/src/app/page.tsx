"use client";

import WelcomeScreen from "./components/WelcomeScreen";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-[#f9f9f9] dark:bg-[#424242] ">
      <div className="h-[95%] flex content-center items-center justify-center">
        <WelcomeScreen />
      </div>
      <div className=" content-center font-bold justify-center flex text-gray-300">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-5 h-5 object-cover filter grayscale"
        />
        <span className="font-bold bg-gradient-to-r from-[#a7a7a7] to-[#4d4c4c] bg-clip-text text-transparent dark:text-white/30 dark:bg-none">
          SONOLA
        </span>
      </div>
    </div>
  );
}
