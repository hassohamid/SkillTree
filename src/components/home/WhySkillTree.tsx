import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { PointerHighlight } from "../ui/pointer-highlight";
import AiCard from "../ui/AICard";
import { StaticRoadmap } from "../ui/StaticRoadmap";

export default function WhySkillTree() {
  const placeholders = [
    "Full-Stack Developer",
    "Learn React and Node.js",
    "Master digital marketing",
    "Become a UX Designer",
    "Learn Python programming",
    "Social media marketing",
    "Photography basics",
    "Video editing skills",
    "Graphic design fundamentals",
    "Data science with Python",
    "Mobile app development",
    "Content creation",
    "SEO and copywriting",
    "Learn Figma and design",
    "Freelance writing",
    "Web development bootcamp",
    "Machine learning basics",
    "Start a YouTube channel",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col container mx-auto items-center mt-35 max-w-6xl  ">
      <h1 className="uppercase text-sm font-medium text-muted-foreground text-wider mb-5">
        {" "}
        How It Works
      </h1>
      <h1 className="font-bold text-balance tracking-tight text-3xl md:text4xl text-center mb-5">
        No complexity, just results.
      </h1>
      <p className=" flex  gap-2  items-center text-lg text-center tracking-right font-medium text-muted-foreground/90 mb-5 px-3 ">
        Goal{" "}
        <span className="p-2 bg-black rounded-md">
          <ArrowRight size={16} color="lime" />
        </span>
        Path{" "}
        <span className="p-2 bg-black rounded-md">
          <ArrowRight size={16} color="lime" />
        </span>{" "}
        Success
      </p>
      <div className="container max-w-3xl mx-auto px-3">
        <Card className="relative ">
          <h1 className="absolute top-3 right-6 py-2 font-black text-3xl text-muted">
            1
          </h1>
          <div className=" p-15">
            <h1 className=" tracking-tighter text-center text-2xl  mb-10 ">
              Tell us what you want to
              <PointerHighlight
                rectangleClassName="bg-blue-100 border-blue-300 "
                pointerClassName="text-blue-500 h-3 w-3"
                containerClassName="inline-block mx-1"
              >
                <span className=" relative z-10">learn</span>
              </PointerHighlight>
            </h1>
            <PlaceholdersAndVanishInput
              onChange={handleChange}
              onSubmit={onSubmit}
              placeholders={placeholders}
            />
          </div>
        </Card>
        <div className="relative">
          <AiCard />
          <h1 className="absolute top-3 right-6 py-2 font-black text-3xl text-muted-foreground/10 ">
            2
          </h1>
        </div>
        <div className="relative">
          <StaticRoadmap />
          <div className="absolute w-full  blur-3xl md:blur3xl -z-99  bottom-0 md:bottom-50  h-[100px] bg-neutral-800" />
        </div>
      </div>
    </div>
  );
}
