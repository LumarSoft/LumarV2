"use client";

import { useEffect, useState } from "react";

export const OpenHomeAnimation = () => {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    if (animationEnded) {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [animationEnded]);

  return (
    <div
      className={`${animationEnded ? "hidden" : "scale-out-center"}`}
      onAnimationEnd={() => setAnimationEnded(true)}
    >
      <img src="/logo.png" alt="Logo Lumarsoft" className="rotating-logo" />
    </div>
  );
};