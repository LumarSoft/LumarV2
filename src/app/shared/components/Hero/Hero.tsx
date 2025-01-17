"use client";
import React from "react";
import { HeroContent } from "@/types/dictionary";
import Typewriter from "typewriter-effect";
import { FramerComponent } from "@/Framer/FramerComponent";

export default function AnimatedHero({
  dictionary,
}: {
  dictionary: HeroContent;
}) {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      <FramerComponent
        style="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 text-5xl lg:text-8xl font-extrabold tracking-tight"
        animationInitial={{ opacity: 0, y: 50 }}
        animationAnimate={{ opacity: 1, y: 0 }}
        animationTransition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>{dictionary.title}</h1>
        <FramerComponent
          style="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          animationInitial={{ opacity: 0, scale: 0.9 }}
          animationAnimate={{ opacity: 1, scale: 1 }}
          animationTransition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          <h2>
            <Typewriter
              options={{
                strings: dictionary.subtitle,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </FramerComponent>
      </FramerComponent>
    </div>
  );
}
