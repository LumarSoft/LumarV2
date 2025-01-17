"use client";
import React, { useState, useEffect } from "react";
import { TalkContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

export default function Talk({ dictionary }: { dictionary: TalkContent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dots, setDots] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const generatedDots = [...Array(200)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
        }}
      ></div>
    ));
    setDots(generatedDots);
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = "service_pkk7blb";
    const templeteID = "template_ry3na8b";
    const publicKey = "8GshpNeyfelrL_CQ2";

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templeteID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        toast.success(dictionary.successMessage, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
      }
    } catch (error) {
      toast.error(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.error("Error al enviar el email", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full text-white py-16 overflow-hidden">
      <FramerComponent
        style="absolute inset-0 opacity-20"
        animationInitial={{ opacity: 0 }}
        animationAnimate={{ opacity: 0.2 }}
        animationTransition={{ duration: 1.5 }}
      >
        {dots}
      </FramerComponent>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <FramerComponent
            style="w-full md:w-1/2"
            animationInitial={{ opacity: 0, y: 50 }}
            animationWhileInView={{ opacity: 1, y: 0 }}
            animationViewPort={{ once: true }}
            animationTransition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <FramerComponent
                style="text-2xl font-bold"
                animationInitial={{ opacity: 0, y: 20 }}
                animationAnimate={{ opacity: 1, y: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>{dictionary.title}</p>
              </FramerComponent>
              <FramerComponent
                style="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                animationInitial={{ opacity: 0, y: 20 }}
                animationAnimate={{ opacity: 1, y: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2>
                  <span className="text-stroke">{dictionary.subtitle}</span>
                </h2>
              </FramerComponent>
              <FramerComponent
                style="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                animationInitial={{ opacity: 0, y: 20 }}
                animationAnimate={{ opacity: 1, y: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2>{dictionary.subtitle2}</h2>
              </FramerComponent>
            </div>
          </FramerComponent>

          <FramerComponent
            style="w-full md:w-1/2 mt-6 md:mt-0"
            animationInitial={{ opacity: 0, scale: 0.9 }}
            animationTransition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            animationWhileInView={{ opacity: 1, scale: 1 }}
            animationViewPort={{ once: true }}
          >
            <form
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 space-y-4"
              onSubmit={handleSubmit}
            >
              <FramerComponent
                style="space-y-4"
                animationInitial={{ opacity: 0, x: -20 }}
                animationAnimate={{ opacity: 1, x: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white bg-opacity-20 border-0 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white bg-opacity-20 border-0 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-white bg-opacity-20 border-0 text-white min-h-[100px]"
                  />
                </div>
              </FramerComponent>

              <FramerComponent
                style="w-full"
                animationInitial={{ opacity: 0, y: 20 }}
                animationAnimate={{ opacity: 1, y: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.9 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </FramerComponent>
            </form>
          </FramerComponent>
        </div>
      </div>
    </div>
  );
}
