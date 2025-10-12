"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  isFirst?: boolean;
}

export default function TemplateCard({ title, description, image, isFirst }: TemplateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const arrow = arrowRef.current;

    if (!card || !arrow) return;

    // Hover In
    const onEnter = () => {
      gsap.to(card, {
        scale: 1.01,
      
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(arrow, { x: 2, duration: 0.4, ease: "power2.out" });
    };

    // Hover Out
    const onLeave = () => {
      gsap.to(card, {
        scale: 1,
      
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(arrow, { x: 0, duration: 0.4, ease: "power2.out" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`rounded-xl cursor-pointer m-1 transition-colors 
        ${isFirst ? "bg-gray-100" : "bg-gray-100 dark:bg-[#1D1D1D]"}
      `}
    >
      <Image
        src={image}
        alt={title}
        width={320}
        height={250}
        className={`rounded-xl border border-white shadow-md 
          ${isFirst ? "bg-gray-100" : "dark:bg-[#1D1D1D]"}
        `}
      />
      <div className="p-3">
        <h4
          className={`font-semibold 
            ${isFirst ? "text-gray-800" : "text-gray-800 dark:text-gray-200"}
          `}
        >
          {title}
        </h4>
        <span
          className={`text-sm flex justify-between items-center
            ${isFirst ? "text-gray-600" : "text-gray-500 dark:text-gray-300"}
          `}
        >
          {description}
          <ArrowRight
            ref={arrowRef}
            className={`w-4 h-4 
              ${isFirst ? "text-gray-700" : "text-gray-700 dark:text-gray-200"}
            `}
          />
        </span>
      </div>
    </div>
  );
}
