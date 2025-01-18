"use client";
import React from "react";
import { HeroContent } from "@/types/dictionary";
import Typewriter from "typewriter-effect";
import { FramerComponent } from "@/Framer/FramerComponent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedHero({
  dictionary,
}: {
  dictionary: HeroContent;
}) {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden"
    >
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

      {/* Call to Action Section */}
      <FramerComponent
        style="mt-12 text-center"
        animationInitial={{ opacity: 0, y: 20 }}
        animationAnimate={{ opacity: 1, y: 0 }}
        animationTransition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ¿Listo para comenzar? Contáctanos hoy mismo
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity font-bold group"
            onClick={() => (window.location.href = "#talk")}
          >
            Contactar ahora
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </div>
      </FramerComponent>
    </div>
  );
}
