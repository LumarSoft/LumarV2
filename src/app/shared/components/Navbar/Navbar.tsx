"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FramerComponent } from "@/Framer/FramerComponent";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const params = useParams();
  const language = params.lang;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FramerComponent
      style={`fixed w-screen z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg" : "bg-transparent"
      }`}
      animationInitial={{ opacity: 0, y: -50 }}
      animationAnimate={{ opacity: 1, y: 0 }}
      animationTransition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <FramerComponent
          animationInitial={{ opacity: 0, x: -20 }}
          animationAnimate={{ opacity: 1, x: 0 }}
          animationTransition={{ delay: 0.2, duration: 0.5 }}
          animationWhileHover={{ scale: 1.1 }}
        >
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="Logo Lumarsoft"
              width={70}
              height={70}
              className="h-10 w-10 md:h-14 md:w-14"
            />
          </Link>
        </FramerComponent>
        <FramerComponent
          animationInitial={{ opacity: 0, x: 20 }}
          animationAnimate={{ opacity: 1, x: 0 }}
          animationTransition={{ delay: 0.4, duration: 0.5 }}
          animationWhileHover={{ scale: 1.1, rotate: 360 }}
        >
          {language === "es" ? (
            <Link href={"/en"}>
              <Image
                src={"/en.png"}
                alt="Ingles"
                width={35}
                height={35}
                className="h-7 w-7 md:h-10 md:w-10"
              />
            </Link>
          ) : (
            <Link href={"/es"}>
              <Image
                src={"/es.png"}
                alt="Español"
                width={35}
                height={35}
                className="h-7 w-7 md:h-10 md:w-10"
              />
            </Link>
          )}
        </FramerComponent>
      </div>
    </FramerComponent>
  );
};

export default Navbar;