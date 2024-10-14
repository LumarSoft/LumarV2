import React from "react";
import Image from "next/image";
import { ValuesContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";

export default function AnimatedValues({
  dictionary,
}: {
  dictionary: ValuesContent;
}) {
  const subtitleAnimation = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.5, ease: "easeInOut" },
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center overflow-hidden">
      <FramerComponent
        style="container mx-auto px-4 py-16"
        animationInitial={{ opacity: 0 }} // Eliminado el desplazamiento
        animationWhileInView={{ opacity: 1 }} // Eliminado el desplazamiento
        animationTransition={{ duration: 0.8, ease: "easeOut" }}
        animationViewPort={{ once: true }} // Se anima solo una vez
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <FramerComponent
            style="lg:w-full space-y-2"
            animationInitial={{ opacity: 0 }} // Eliminado el desplazamiento
            animationWhileInView={{ opacity: 1 }} // Eliminado el desplazamiento
            animationTransition={{ delay: 0.2, duration: 0.8 }}
            animationViewPort={{ once: true }} // Se anima solo una vez
          >
            <h2 className="text-2xl font-semibold">{dictionary.title}</h2>
            <FramerComponent
              style="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              animationInitial={subtitleAnimation.initial}
              animationWhileInView={subtitleAnimation.whileInView}
              animationTransition={subtitleAnimation.transition}
              animationViewPort={{ once: true }}
            >
              <h1>{dictionary.subtitle}</h1>
            </FramerComponent>
            <FramerComponent
              style="mb-6 text-gray-300"
              animationInitial={{ opacity: 0 }} // Eliminado el desplazamiento
              animationWhileInView={{ opacity: 1 }} // Eliminado el desplazamiento
              animationTransition={{ delay: 0.5, duration: 0.8 }} // Delay y duración
              animationViewPort={{ once: true }}
            >
              {dictionary.description}
            </FramerComponent>
            <ul className="mb-6 space-y-2">
              {dictionary.values.map((value, index) => (
                <FramerComponent
                  style="flex items-center"
                  key={index}
                  animationInitial={{ opacity: 0 }} // Eliminado el desplazamiento
                  animationAnimate={{ opacity: 1 }} // Eliminado el desplazamiento
                  animationTransition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                  }}
                >
                  <FramerComponent style="w-4 h-4 mr-2 text-cyan-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </FramerComponent>
                  {value}
                </FramerComponent>
              ))}
            </ul>
          </FramerComponent>
          <FramerComponent
            style="lg:w-full mb-8 lg:mb-0"
            animationInitial={{ opacity: 0 }} // Eliminado el desplazamiento
            animationWhileInView={{ opacity: 1 }} // Eliminado el desplazamiento
            animationTransition={{ delay: 0.4, duration: 0.8 }}
            animationViewPort={{ once: true }} // Se anima solo una vez
          >
            <div>
              <Image
                src="/sobre_nosotros_2.jpg"
                alt="Interior moderno de oficina"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </FramerComponent>
        </div>
        {/* Agregamos la barra de color animada aquí */}
      </FramerComponent>
    </div>
  );
}
