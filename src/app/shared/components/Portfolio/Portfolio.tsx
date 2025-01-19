"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PortfolioContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";
import Autoplay from "embla-carousel-autoplay";

const AnimatedPortfolio = ({
  dictionary,
}: {
  dictionary: PortfolioContent;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div id="portfolio">
      <FramerComponent
        style="w-full py-28 justify-center space-y-6 px-4"
        animationInitial="hidden"
        animationWhileInView="visible"
        animationViewPort={{ once: true }}
        animationVariants={containerVariants}
      >
        <div className="container m-auto">
          <FramerComponent
            style="w-full md:w-1/2"
            animationVariants={itemVariants}
          >
            <h2 className="text-2xl font-semibold">{dictionary.title}</h2>
            <div className="relative">
              <FramerComponent
                animationAnimate={{ clipPath: "inset(0 100% 0 0)" }}
                animationWhileInView={{ clipPath: "inset(0 0% 0 0)" }}
                animationTransition={{ duration: 1.5, ease: "easeInOut" }}
                animationViewPort={{ once: true }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {dictionary.subtitle}
                </h1>
              </FramerComponent>
              <div
                className="absolute top-0 left-0 w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-black/5"
                aria-hidden="true"
              >
                {dictionary.subtitle}
              </div>
            </div>
          </FramerComponent>
        </div>

        <Carousel
          className="pr-2"
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {dictionary.projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <FramerComponent animationVariants={itemVariants}>
                  <Card className="h-128 overflow-hidden relative group">
                    <CardContent className="p-0 h-full">
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-base lg:text-xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm">{project.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FramerComponent>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </FramerComponent>
    </div>
  );
};

export default AnimatedPortfolio;
