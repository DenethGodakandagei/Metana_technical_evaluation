"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function LogoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and float effect for background
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
      );

      // Subtle floating animation for the logo
      gsap.to(logoRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
  ref={cardRef}
  className="relative w-1/2 h-full flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/lightbg.png')" }} 
>
  <Image
    src="/lightUi.png"
    alt="Sonola Logo"
    width={340}
    height={600}
    className="opacity-90"
  />
</div>

  );
}
