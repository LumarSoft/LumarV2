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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const subtitleAnimation = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  return (
    <div id="services" className="bg-gradient-to-b from-slate-950 to-slate-900">
      <FramerComponent
        style="text-white relative flex items-center justify-center py-20 lg:py-32 overflow-hidden"
        animationInitial="hidden"
        animationWhileInView="visible"
        animationViewPort={{ once: true }}
        animationVariants={containerVariants}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative ">
          <FramerComponent
            style="text-center space-y-6"
            animationVariants={titleVariants}
          >
            <h2 className="text-xl font-bold text-cyan-400 ">
              {dictionary.title}
            </h2>
            <div className="relative">
              <FramerComponent
                style="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight"
                animationInitial={subtitleAnimation.initial}
                animationWhileInView={subtitleAnimation.whileInView}
                animationTransition={subtitleAnimation.transition}
                animationViewPort={{ once: true }}
              >
                {dictionary.subtitle}
                <br />
                {dictionary.subtitle2}
              </FramerComponent>
            </div>
          </FramerComponent>

          <FramerComponent
            style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            animationVariants={containerVariants}
          >
            {dictionary.services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon];

              return (
                <FramerComponent
                  key={index}
                  style=""
                  animationVariants={cardVariants}
                >
                  <div
                    className="relative p-6 h-full rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 
                                hover:bg-gradient-to-br hover:from-cyan-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                                hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    {/* Icon container */}
                    <div className="mb-6 relative flex">
                      <div className=" bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-70 transition duration-300" />
                      <div className="relative p-3 bg-slate-800 rounded-lg ring-1 ring-white/10 group-hover:ring-purple-500/50">
                        <ServiceIcon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300 ">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 border border-purple-500/50 rounded-2xl opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                    <FramerComponent
                      style="absolute top-96 right-0 w-[230px] h-[250px] bg-gradient-to-l from-purple-500 to-red-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 lg:translate-x-1/2"
                      animationInitial={{ scale: 0, opacity: 0 }}
                      animationAnimate={{ scale: 1, opacity: 1 }}
                      animationTransition={{
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </FramerComponent>
              );
            })}
          </FramerComponent>
        </div>
      </FramerComponent>
    </div>
  );
}
