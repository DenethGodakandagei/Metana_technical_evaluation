"use client";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b">
      <div className="text-indigo-700 text-lg font-semibold">SONOLA</div>

      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[400px]">
        <Search className="text-gray-500 mr-2" size={18} />
        <input
          placeholder="Search projects and experiences"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition">
        Try Pro →
      </button>
    </header>
  );
}
