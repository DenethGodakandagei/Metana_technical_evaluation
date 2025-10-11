"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import LogoCard from "./LogoCard";

export default function WelcomeScreen() {
  return (
    <div className="flex bg-gray-50 shadow-sm w-[95%]  h-[95%] overflow-hidden   rounded-3xl">
      {/* Left Section */}
      <div className="w-1/2  flex flex-col justify-between p-10">
        <div className="  flex flex-col justify-between px-10 py-8">
          {/* Top content */}
          <div className="pb-18">
            <h1 className="text-6xl font-light mb-3 text-gray-900">
              Welcome to Sonola
            </h1>
            <p className="text-gray-600 text-justify text-3xl font-thin mb-6">
              With Sonola, making stand-out marketing content is as easy as a
              few clicks. Let’s get started!
            </p>
          </div>
        </div>
        {/* Bottom content */}
        <div className=" bg-white text-2xl text-justify  p-10 rounded-xl mb-4 backdrop-blur-md">
          <p className="text-gray-700 mb-3">
            63% of marketers say creating engaging content consistently is their
            biggest challenge.
          </p>
          <p className="text-sm text-gray-500">
            Content Marketing Institute, 2022
          </p>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-xl">
          <div className="flex items-center space-x-2 w-full">
            <div className="flex items-center space-x-2 w-full">
              <div className="w-8 h-4 rounded-full bg-blue-100"></div>
              <div className="w-16 h-4 rounded-full bg-blue-200"></div>
              <div className="w-32 h-4 rounded-full bg-blue-300"></div>
              <div className="w-62 h-4 rounded-full bg-blue-400"></div>
              <button className="w-62 mx-4  bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-colors [box-shadow:inset_0_0_8px_white]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <LogoCard />
    </div>
  );
}
