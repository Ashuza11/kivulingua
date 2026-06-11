"use client";

import { useEffect, useState } from "react";

interface AnimatedTitleProps {
  titles: string[];
}

export default function AnimatedTitle({ titles }: AnimatedTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(cycleInterval);
  }, [titles.length]);

  return (
    <h1
      className="text-5xl font-bold leading-tight tracking-tight text-[#111111] md:text-6xl animate-fade-in-up transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        animationDelay: "0.2s",
      }}
    >
      {titles[currentIndex]}
    </h1>
  );
}
