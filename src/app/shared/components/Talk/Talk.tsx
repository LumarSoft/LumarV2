import React from "react";
import { TalkContent } from "@/types/dictionary";
import { FramerComponent } from "@/Framer/FramerComponent";

export default function Talk({ dictionary }: { dictionary: TalkContent }) {
  return (
    <div className="relative w-full text-white py-16 overflow-hidden">
      {/* Dotted background */}
      <FramerComponent
        style="absolute inset-0 opacity-20"
        animationInitial={{ opacity: 0 }}
        animationAnimate={{ opacity: 0.2 }}
        animationTransition={{ duration: 1.5 }}
      >
        {[...Array(200)].map((_, i) => (
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
        ))}
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
            <form className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <FramerComponent
                style="text-2xl font-bold mb-4"
                animationInitial={{ opacity: 0, y: -20 }}
                animationAnimate={{ opacity: 1, y: 0 }}
                animationTransition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3>Contáctenos</h3>
              </FramerComponent>
              {["name", "email", "message"].map((field, index) => (
                <FramerComponent
                  key={field}
                  style="mb-4"
                  animationInitial={{ opacity: 0, x: -20 }}
                  animationAnimate={{ opacity: 1, x: 0 }}
                  animationTransition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                >
                  <div>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium mb-1"
                    >
                      {field === "name"
                        ? "Nombre"
                        : field === "email"
                        ? "Email"
                        : "Mensaje"}
                    </label>
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md"
                      />
                    ) : (
                      <textarea
                        id={field}
                        rows={4}
                        className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md"
                      ></textarea>
                    )}
                  </div>
                </FramerComponent>
              ))}
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
