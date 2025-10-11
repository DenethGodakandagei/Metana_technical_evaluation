"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LogoCard() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("light");

  // Handle hydration safely (avoid mismatch)
  useEffect(() => {
    const activeTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(activeTheme);
  }, [theme, systemTheme]);

  const videoSrc =
    currentTheme === "dark"
      ? "/assets/dark-video.mp4"
      : "/assets/light-video.mp4";

  return (
    <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-blue-300 overflow-hidden  shadow-lg">
      <video
        key={videoSrc} 
        src={videoSrc}
        className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
