import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Marquee } from "@/components/magicui/marquee";
import { SkillTreeCardExample } from "./SkillTreeCard";

export default function WhySkillTree() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const baseText = "I want to become a ";
  const words = [
    "Full-Stack Developer",
    "Graphic Designer",
    "Digital Marketer",
    "Content Creator",
    "Video Editor",
    "Social Media Manager",
    "Freelance Writer",
    "UI/UX Designer",
    "Photographer",
    "Music Producer",
    "Voice Actor",
    "Travel Blogger",
    "YouTube Creator",
    "Copywriter",
    "E-commerce Expert",
    "SEO Specialist",
    "Online Coach",
    "Podcast Host",
  ];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const fullText = baseText + currentWord;

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentWordIndex, words, baseText]);

  return (
    <div className="flex flex-col container mx-auto items-center mt-35 max-w-6xl  ">
      <h1 className="uppercase text-sm font-medium text-muted-foreground text-wider mb-5">
        {" "}
        Why Choose Us
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

          <div className="relative p-5">
            <h1 className="px-2 pb-2 font-semibold tracking-tighter ">
              What would you like to learn?
            </h1>
            <textarea
              className="w-full min-h-[180px] resize-none rounded-xl border border-border bg-background px-5 py-5 pr-12 text-sm text-muted-foreground  pointer-events-none"
              rows={3}
              value={currentText}
              readOnly
            />
            <Button
              variant="secondary"
              className="absolute right-10 bottom-10 p-2 rounded-full transition-colors"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </Card>{" "}
        <Card className="mt-5 bg-neutral-950 ">
          <div className="relative">
            <Badge className="absolute top-3 right-6 py-2 bg-purple-600 text-white  ">
              <span className=" text-center font-medium border-r border-border/70 px-1.5 uppercase  ">
                step
              </span>
              2
            </Badge>
          </div>
          <div className="relative p-5">
            <h1 className="px-2 pb-4 font-medium tracking-tighter text-white">
              Generating your personalized path
            </h1>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border ">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-muted/80">
                  Analyzing your goals...
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border ">
                <div className="size-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-sm text-muted/80">
                  Finding optimal resources...
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border ">
                <div className="size-2 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-sm text-muted/80">
                  Creating learning roadmap...
                </span>
              </div>
            </div>
          </div>
        </Card>
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
          <div className="w-full ">
            <Marquee pauseOnHover>
              <SkillTreeCardExample />
            </Marquee>
          </div>
        </Card>
      </div>
    </div>
  );
}
