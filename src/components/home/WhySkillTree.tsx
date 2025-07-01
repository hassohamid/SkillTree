import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { PointerHighlight } from "../ui/pointer-highlight";
import AiCard from "../ui/AICard";

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
        <Card className="relative">
          <Badge className="absolute top-3 right-6 py-2  ">
            <span className="text-muted text-center font-medium border-r px-1.5 uppercase border-border/40">
              step
            </span>
            1
          </Badge>
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
          <Badge className="absolute top-3 right-6 py-2 bg-purple-600 text-white  ">
            <span className=" text-center font-medium border-r border-border/70 px-1.5 uppercase  ">
              step
            </span>
            2
          </Badge>
        </div>
        <Card className="mt-5 pb-0 mb-0">
          <div className="relative">
            <Badge className="absolute top-3 right-6 py-2">
              <span className="text-muted text-center font-medium border-r px-1.5 uppercase border-border/40">
                step
              </span>
              3
            </Badge>
          </div>
          <div className="relative p-5">
            <h1 className="px-2 pb-4 font-semibold tracking-tighter border-b">
              Explore your personalized roadmap
            </h1>
          </div>
          <div className="w-full "></div>
        </Card>
      </div>
    </div>
  );
}
