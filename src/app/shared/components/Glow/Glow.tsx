import { FramerComponent } from "@/Framer/FramerComponent";
import React from "react";

const Glow = () => {
  return (
    <div className="overflow-x-hidden">
      {" "}
      <FramerComponent
        style="absolute bottom-0 left-0 w-[100px] h-[100px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 -translate-x-1/2 -translate-y-32"
        animationInitial={{ scale: 0, opacity: 0 }}
        animationAnimate={{ scale: 1, opacity: 1 }}
        animationTransition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      />
      <FramerComponent
        style="absolute top-0 right-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 lg:translate-x-1/2"
        animationInitial={{ scale: 0, opacity: 0 }}
        animationAnimate={{ scale: 1, opacity: 1 }}
        animationTransition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
    </div>
  );
};

export default Glow;
