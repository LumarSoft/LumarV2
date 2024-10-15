import React from "react";
import { ServicesContent } from "@/types/dictionary";
import { Monitor, Zap, Box, Wand2 } from "lucide-react";
import { FramerComponent } from "@/Framer/FramerComponent";

const iconMap = {
  Monitor,
  Zap,
  Box,
  Wand2,
};

export default function AnimatedServices({
  dictionary,
}: {
  dictionary: ServicesContent;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Aumentar el tiempo entre animaciones
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5, // Puedes ajustar esta duración también
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5, // Aumentar duración aquí también
      },
    },
  };

  const subtitleAnimation = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.5, ease: "easeInOut" },
  };

  return (
    <FramerComponent
      style="text-white px-4 sm:px-6 lg:px-8 relative flex items-center justify-center py-10 lg:py-40"
      animationInitial="hidden"
      animationWhileInView="visible"
      animationViewPort={{ once: true }}
      animationVariants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-4 ">
        <FramerComponent
          style="lg:text-center"
          animationVariants={titleVariants}
        >
          <h2 className="text-2xl font-semibold">{dictionary.title}</h2>
          <div className="relative">
            <FramerComponent
              style="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              animationInitial={subtitleAnimation.initial}
              animationWhileInView={subtitleAnimation.whileInView}
              animationTransition={subtitleAnimation.transition}
              animationViewPort={{ once: true }}
            >
              {dictionary.subtitle}
              <br />
              {dictionary.subtitle2}
            </FramerComponent>
            <div
              className="absolute top-0 left-0 w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-black/5"
              aria-hidden="true"
            >
              {dictionary.subtitle}
              <br />
              {dictionary.subtitle2}
            </div>
          </div>
        </FramerComponent>
        <FramerComponent
          style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          animationVariants={containerVariants}
        >
          {dictionary.services.map((service, index) => {
            const ServiceIcon = iconMap[service.icon];

            return (
              <FramerComponent
                key={index}
                style="p-6 rounded-lg relative overflow-hidden group"
                animationVariants={cardVariants}
              >
                {/* Fondo oscuro que desaparece */}
                <FramerComponent
                  style="absolute inset-0 bg-gray-800"
                  animationInitial={{ opacity: 1 }}
                  animationWhileHover={{ opacity: 0 }}
                  animationTransition={{ duration: 0.3 }}
                />
                {/* Fondo de color que aparece al hacer hover */}
                <FramerComponent
                  style="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"
                  animationInitial={{ opacity: 0 }}
                  animationWhileHover={{ opacity: 1 }}
                  animationTransition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="mb-4">
                    <ServiceIcon className="w-8 h-8 text-gray-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-100 transition-all duration-300 ease-in-out">
                    {service.description}
                  </p>
                </div>
                {/* Cambiar el fondo de toda la tarjeta en hover */}
                <FramerComponent style="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </FramerComponent>
            );
          })}
        </FramerComponent>
      </div>
    </FramerComponent>
  );
}
