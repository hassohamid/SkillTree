import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Preview from "@/components/home/Preview";
import WhySkillTree from "@/components/home/WhySkillTree";

export default function Home() {
  return (
    <>
      <Hero />
      <Preview />
      <HowItWorks />
      <WhySkillTree />
      <FAQ />
    </>
  );
}
