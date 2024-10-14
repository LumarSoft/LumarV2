import { FramerComponent } from "@/Framer/FramerComponent";
import React from "react";

const Line = ({ start }: { start: string }) => {
  return (
    <FramerComponent
      style={`absolute ${
        start === "left" ? "left-0" : "right-0"
      } w-1/2 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-red-500`}
      animationInitial={{ width: 0 }}
      animationWhileInView={{ width: "50%" }}
      animationViewPort={{ once: true }}
      animationTransition={{ duration: 1, ease: "easeInOut" }}
    />
  );
};

export default Line;
