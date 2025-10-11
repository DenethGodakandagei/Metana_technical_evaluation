"use client";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-[#1D1D1D]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/logo_blue.png" 
          alt="Sonola Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
       
      </div>

      {/* Search bar */}
      <div className="flex items-center text-black dark:text-white bg-gray-100 dark:bg-[#424242] rounded-full px-4 py-2 w-[400px]">
        <Search className="text-gray-600 mr-2" size={18} />
        <input
          placeholder="Search projects and experiences"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Button */}
      <button className="px-4 py-1 bg-white  flex text-black border border-gray-400 rounded-2xl  text-sm  transition">
       <span className="pt-1">Try Pro</span>  <img src="   https://cdn-icons-png.flaticon.com/512/8369/8369338.png " width="28" height="28" alt="" title="" className=" p-1"></img>
      </button>
    </header>
  );
}
