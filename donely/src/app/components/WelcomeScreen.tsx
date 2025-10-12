"use client";

import Link from "next/link";
import LogoCard from "./LogoCard";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col lg:flex-row dark:bg-[#292929] dark:text-[#f9f9f9] shadow-sm w-[95%] h-[90%] overflow-hidden rounded-3xl">
      {/* Left Section */}
      <div className="w-full h-[8=700px]  lg:w-1/2 flex flex-col justify-between p-6 lg:p-10">
        <div className="flex flex-col justify-baseline px-4 lg:px-10 py-6 lg:py-8">
          {/* Top content */}
          <div className="pb-8">
            <h1 className="text-3xl lg:text-5xl font-light mb-3 text-gray-900 dark:text-[#f9f9f9] text-center lg:text-left">
              Welcome to Sonola
            </h1>
            <p className="text-gray-600 dark:text-[#f9f9f9] text-justify text-lg lg:text-2xl font-thin mb-6">
              With Sonola, making stand-out marketing content is as easy as a
              few clicks. Let’s get started!
            </p>
          </div>
        </div>

        {/* Bottom content */}
        <div className=" text-lg lg:text-xl  text-justify mb-4 backdrop-blur-md p-2">
          <div className="text-gray-700  dark:text-[#f9f9f9] bg-white dark:bg-[#3a3838] [box-shadow:inset_0_0_1px_white] p-3 mb-3 rounded-2xl w-166">
            <p className="">
              63% of marketers say creating engaging content consistently is their
              biggest challenge.
            </p>
            <p className="text-sm text-gray-500 dark:text-[#f9f9f9]">
              Content Marketing Institute, 2022
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between   rounded-xl space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2  justify-center sm:justify-start bg-white dark:bg-[#3a3838] [box-shadow:inset_0_0_1px_white] p-3 rounded-2xl h-16 ">
              <div className="w-8 h-2 rounded-full bg-blue-100 dark:bg-gray-700"></div>
              <div className="w-8 h-2 rounded-full bg-blue-100 dark:bg-gray-700"></div>
              <div className="w-16 h-2 rounded-full bg-blue-200 dark:bg-gray-600"></div>
              <div className="w-32 h-2 rounded-full bg-blue-300 dark:bg-blue-800"></div>
              <div className="w-38 h-2 rounded-full bg-blue-400 dark:bg-blue-700"></div>
            </div>

            <Link href="/dashboard" className="w-full sm:w-auto flex justify-center h-16 mx-3">
              <button className="w-40 sm:w-48 bg-blue-500 dark:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-500 dark:hover:bg-blue-800 transition-colors [box-shadow:inset_0_0_8px_white] dark:[box-shadow:inset_0_0_2px_white] cursor-pointer">
                Next
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Right Section */}
      <LogoCard />
    </div>
  );
}
