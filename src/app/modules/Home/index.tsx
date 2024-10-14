import Glow from "@/app/shared/components/Glow/Glow";
import Hero from "@/app/shared/components/Hero/Hero";
import About from "@/app/shared/components/About/About";
import Values from "@/app/shared/components/Values/Values";
import Portfolio from "@/app/shared/components/Portfolio/Portfolio";
import Services from "@/app/shared/components/Services/Services";
import Staff from "@/app/shared/components/Staff/Staff";
import Talk from "@/app/shared/components/Talk/Talk";
import { Dictionary } from "@/types/dictionary";
import Line from "@/app/shared/components/Line/Line";

export default function HomeModule({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="overflow-x-hidden">
      <Glow />
      <Hero dictionary={dictionary.Hero} />
      <Line start="left" />
      <About dictionary={dictionary.About} />
      <Line start="right" />
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
