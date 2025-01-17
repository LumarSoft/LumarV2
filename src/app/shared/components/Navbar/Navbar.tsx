"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FramerComponent } from "@/Framer/FramerComponent";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const params = useParams();
  const language = params.lang;

  const navItems = [
    { href: "#hero", label: language === "es" ? "Inicio" : "Home" },
    { href: "#about", label: language === "es" ? "Nosotros" : "About" },
    {
      href: "#portfolio",
      label: language === "es" ? "Portafolio" : "Portfolio",
    },
    { href: "#services", label: language === "es" ? "Servicios" : "Services" },
    { href: "#values", label: language === "es" ? "Valores" : "Values" },
    { href: "#staff", label: language === "es" ? "Equipo" : "Staff" },
    { href: "#talk", label: language === "es" ? "Contacto" : "Contact" },
  ];

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

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

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
      </div>
    </FramerComponent>
  );
};

export default Navbar;
