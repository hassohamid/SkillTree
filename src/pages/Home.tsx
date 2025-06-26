import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Preview from "@/components/home/Preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Preview />
      <HowItWorks />
      <div className="h-screen bg-gradient-to-b from-neutral-300 to-white"></div>
    </>
  );
}
