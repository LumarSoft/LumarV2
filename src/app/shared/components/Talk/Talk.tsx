"use client";
import React, { useState, useEffect } from "react";
import { TalkContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";
import emailjs from "@emailjs/browser";

export default function Talk({ dictionary }: { dictionary: TalkContent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dots, setDots] = useState<JSX.Element[]>([]); // Estado para el fondo

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
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí usamos emailjs para enviar el mensaje
    const serviceID = "service_19pzo67";
    const templeteID = "template_flxurbg";
    const publicKey = "SrXxAldR5RwaYNF6_";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templeteID, templateParams, publicKey)
      .then((response) => {
        console.log("Email enviado correctamente", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el email", error);
      });
  };

  return (
    <div className="relative w-full text-white py-16 overflow-hidden">
      {/* Dotted background */}
      <FramerComponent
        style="absolute inset-0 opacity-20"
        animationInitial={{ opacity: 0 }}
        animationAnimate={{ opacity: 0.2 }}
        animationTransition={{ duration: 1.5 }}
      >
        {dots} {/* Usamos el estado dots en lugar de generarlos aquí */}
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
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6"
              onSubmit={handleSubmit}
            >
              <FramerComponent
                style="mb-4"
                animationInitial={{ opacity: 0, x: -20 }}
                animationAnimate={{ opacity: 1, x: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.6 }}
              >
                <label>
                  Nombre
                  <input
                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Correo electrónico
                  <input
                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Mensaje
                  <textarea
                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
              </FramerComponent>
              <FramerComponent
                style="w-full"
                animationInitial={{ opacity: 0, y: 20 }}
                animationAnimate={{ opacity: 1, y: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.9 }}
                animationWhileHover={{ scale: 1.05 }}
                animationWhileInView={{ scale: [null, 1.02, 1] }}
              >
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  Enviar
                </button>
              </FramerComponent>
            </form>
          </FramerComponent>
        </div>
      </div>
    </div>
  );
}
