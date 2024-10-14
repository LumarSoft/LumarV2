"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { HeroContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";
import Autoplay from "embla-carousel-autoplay";

const AnimatedPortfolio = ({ dictionary }: { dictionary: HeroContent }) => {
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

  // Datos de ejemplo para los proyectos
  const projects = [
    {
      title: "END SRL",
      description:
        "Rediseño integral del sitio web para END SRL, una empresa líder en talleres aeronáuticos de reparación. Modernizamos su presencia digital con un enfoque en mejorar la experiencia de usuario, adaptando el diseño a los estándares actuales y destacando sus servicios especializados.",
      image: "/0.png",
    },
    {
      title: "Landing Page para UESEVI",
      description:
        "Diseño de una landing page para UESEVI con el objetivo de dar a conocer su identidad y servicios. La página destaca los valores del gremio y facilita el acceso a información clave para miembros y público en general, con un diseño limpio y profesional.",
      image: "/4.png",
    },
    {
      title: "Panel de Administración para UESEVI",
      description:
        "Desarrollo de un panel de administración para UESEVI, el gremio de empleados de seguridad y vigilancia de Rosario. La plataforma permite gestionar información interna de manera eficiente, con herramientas avanzadas para la administración de datos y la generación de informes.",
      image: "/3.png",
    },
    {
      title: "E-commerce de Tecnología",
      description:
        "Creación de un e-commerce especializado en productos de tecnología, con un diseño moderno y funcional. La plataforma está optimizada para ofrecer una experiencia de compra fluida y segura, permitiendo a los usuarios navegar entre una amplia gama de productos y realizar compras fácilmente.",
      image: "/2.png",
    },
    {
      title: "John Pellegrini Management Group",
      description:
        "Desarrollo de una plataforma administrativa para John Pellegrini Management Group, una aseguradora. La solución permite a los empleados gestionar eficientemente la base de datos de clientes, optimizando los procesos internos con un sistema seguro y personalizado.",
      image: "/1.png",
    },
    {
      title:
        "Panel de Administración y Sorteos para Mutual de Suboficiales Retirados de Gendarmería Nacional",
      description:
        "Desarrollo de un panel de administración con funcionalidades de sorteos para la Mutual de Suboficiales Retirados de Gendarmería Nacional. El sistema permite gestionar la membresía y realizar sorteos de manera automatizada, con reportes en tiempo real y gestión eficiente de la información.",
      image: "/5.png",
    },
  ];

  return (
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
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
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
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p>{project.description}</p>
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
  );
};

export default AnimatedPortfolio;
