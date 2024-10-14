import React from "react";

const Glow = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="absolute bottom-0 left-0 w-[100px] h-[100px] md:w-[450px] md:h-[450px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 -translate-x-1/2 -translate-y-32"></div>
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[450px] md:h-[450px] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 lg:translate-x-1/2"></div>
    </div>
  );
};

export default Glow;
