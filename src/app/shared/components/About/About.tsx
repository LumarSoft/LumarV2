import React from "react";
import { AboutContent } from "@/types/dictionary";
import Image from "next/image";
import { FramerComponent } from "@/Framer/FramerComponent";

export default function AnimatedAbout({
  dictionary,
}: {
  dictionary: AboutContent;
}) {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <FramerComponent
            style="relative"
            animationInitial={{ opacity: 0, x: -50 }}
            animationWhileInView={{ opacity: 1, x: 0 }}
            animationViewPort={{ once: true }}
            animationTransition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/sobre_nosotros_1.jpg"
              alt="Imagen 2"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </FramerComponent>

          <FramerComponent
            style="space-y-4 max-w-xl w-full"
            animationInitial={{ opacity: 0, x: 50 }}
            animationWhileInView={{ opacity: 1, x: 0 }}
            animationViewPort={{ once: true }}
            animationTransition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold">{dictionary.title}</h2>
              <div className="relative">
                <FramerComponent
                  style="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                  animationInitial={{ clipPath: "inset(0 100% 0 0)" }}
                  animationWhileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  animationTransition={{ duration: 1.5, ease: "easeInOut" }}
                  animationViewPort={{ once: true }}
                >
                  {dictionary.subtitle}
                </FramerComponent>
                <div
                  className="absolute top-0 left-0 w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-black/5"
                  aria-hidden="true"
                >
                  {dictionary.subtitle}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{dictionary.description}</p>
          </FramerComponent>
        </div>
      </div>
    </section>
  );
}
