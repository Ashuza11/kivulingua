"use client";

import { useEffect, useState } from "react";

interface AnimatedTitleProps {
  titles: string[];
}

export default function AnimatedTitle({ titles }: AnimatedTitleProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = titles[currentIndex];
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const delayBetweenTitles = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTitles);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle, titles.length]);

  return (
    <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#111111] md:text-6xl animate-fade-in-up min-h-[1.5em]" style={{ animationDelay: "0.2s" }}>
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
