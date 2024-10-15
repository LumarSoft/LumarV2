import Hero from "@/app/shared/components/Hero/Hero";
import About from "@/app/shared/components/About/About";
import Values from "@/app/shared/components/Values/Values";
import Portfolio from "@/app/shared/components/Portfolio/Portfolio";
import Services from "@/app/shared/components/Services/Services";
import Staff from "@/app/shared/components/Staff/Staff";
import Talk from "@/app/shared/components/Talk/Talk";
import { Dictionary } from "@/types/dictionary";
import Line from "@/app/shared/components/Line/Line";
import { FramerComponent } from "@/Framer/FramerComponent";

export default function HomeModule({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="overflow-x-hidden ">
      <FramerComponent
        style="absolute bottom-0 left-0 w-[100px] h-[100px] md:w-[250px] md:h-[250px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 -translate-x-1/2 -translate-y-32"
        animationInitial={{ scale: 0, opacity: 0 }}
        animationAnimate={{ scale: 1, opacity: 1 }}
        animationTransition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      />
      <FramerComponent
        style="absolute top-56 right-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-[110px] opacity-100 lg:translate-x-1/2"
        animationInitial={{ scale: 0, opacity: 0 }}
        animationAnimate={{ scale: 1, opacity: 1 }}
        animationTransition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      <Hero dictionary={dictionary.Hero} />
      <Line start="right" />
      <About dictionary={dictionary.About} />
      <Line start="left" />
      <Portfolio dictionary={dictionary.Portfolio} />
      <Services dictionary={dictionary.Services} />
      <Line start="left" />
      <Values dictionary={dictionary.Values} />
      <Line start="right" />
      <Staff dictionary={dictionary.Staff} />
      <Talk dictionary={dictionary.Talk} />
    </div>
  );
}
