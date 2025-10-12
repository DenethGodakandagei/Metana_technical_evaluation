"use client";
import { Home, Folder, Layers, Upload, MoreHorizontal } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: Folder, label: "Projects" },
    { icon: Layers, label: "Templates" },
    { icon: Upload, label: "Uploads" },
    { icon: MoreHorizontal, label: "More" },
  ];

  return (
    <aside className="w-20 h-screen  flex flex-col items-center py-12 bg-gray-50 dark:bg-[#0D0D0D]">
      <nav className="flex flex-col items-center gap-6">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center  text-gray-600  transition"
          >
            <Icon className="hover:bg-blue-500 m-1  p-1 rounded-xl dark:text-white hover:[box-shadow:inset_0_0_8px_white] hover:text-white"  size={28} />
            <span className="text-[10px] dark:text-white mt-1">{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto mb-4">
        <img
  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=345`}
  alt="User"
  className="w-10 h-10 rounded-full border"
/>



      </div>
    </aside>
  );
}
