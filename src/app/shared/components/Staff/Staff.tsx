import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Laptop, Rocket, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { AboutContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";

const teamMembers = [
  {
    name: "Mateo Bodini",
    icon: Code2,
    color: "text-blue-500",
    linkedin: "https://www.linkedin.com/in/mateobodini/",
    github: "https://github.com/mateoBodiniARG",
    githubUsername: "mateoBodiniARG",
  },
  {
    name: "Marcelo Benitez",
    icon: Laptop,
    color: "text-green-500",
    linkedin: "https://www.linkedin.com/in/benitez-marcelo/",
    github: "https://github.com/marcebenitez2",
    githubUsername: "marcebenitez2",
  },
  {
    name: "Lucas Quaroni",
    icon: Rocket,
    color: "text-purple-500",
    linkedin: "https://www.linkedin.com/in/lucasquaroni/",
    github: "https://github.com/LucasQuaroni",
    githubUsername: "LucasQuaroni",
  },
];

export default function AnimatedStaff({
  dictionary,
}: {
  dictionary: AboutContent;
}) {
  const subtitleAnimation = {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 1.5, ease: "easeInOut" },
  };

  return (
    <div id="staff">
      <FramerComponent
        style="container mx-auto px-4 py-16"
        animationInitial={{ opacity: 0 }}
        animationTransition={{ duration: 0.8 }}
        animationWhileInView={{ opacity: 1 }}
        animationViewPort={{ once: true }} // Solo se anima una vez cuando entra en vista
      >
        <FramerComponent
          style="text-2xl font-bold lg:text-center"
          animationInitial={{ opacity: 0 }}
          animationAnimate={{ opacity: 1 }}
          animationTransition={{ delay: 0.2, duration: 0.6 }}
        >
          {dictionary.title}
        </FramerComponent>
        <FramerComponent
          style="lg:text-center text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          animationInitial={subtitleAnimation.initial}
          animationWhileInView={subtitleAnimation.whileInView}
          animationTransition={subtitleAnimation.transition}
          animationViewPort={{ once: true }}
        >
          {dictionary.subtitle}
        </FramerComponent>
        <FramerComponent
          style="text-xl lg:text-center text-muted-foreground mb-12"
          animationInitial={{ y: 50, opacity: 0 }}
          animationAnimate={{ y: 0, opacity: 1 }}
          animationTransition={{ delay: 0.6, duration: 0.6 }}
        >
          {dictionary.description}
        </FramerComponent>
        <FramerComponent
          style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          animationInitial="hidden"
          animationAnimate="show"
          animationVariants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          animationViewPort={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <FramerComponent
              key={index}
              style="overflow-hidden"
              animationInitial={{ opacity: 0, y: 50 }}
              animationWhileInView={{ scale: 1.05, opacity: 1, y: 0 }}
              animationTransition={{ duration: 0.8 }}
              animationWhileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <CardHeader className="relative pb-0">
                  <div className="relative z-10 flex justify-center items-center h-32">
                    <Image
                      src={`https://github.com/${member.githubUsername}.png`}
                      alt={`${member.name} profile`}
                      width={120}
                      height={120}
                      className="rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <CardTitle className="text-xl font-semibold mb-2">
                    {member.name}
                  </CardTitle>
                </CardContent>
                <CardFooter className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6 hover:text-gray-500 transition-colors duration-300 ease-in-out" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </FramerComponent>
          ))}
        </FramerComponent>
      </FramerComponent>
    </div>
  );
}
