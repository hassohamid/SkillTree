import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

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
    <div className="flex flex-col container mx-auto items-center mt-35 max-w-6xl ">
      <h1 className="uppercase text-sm font-medium text-muted-foreground text-wider mb-5">
        {" "}
        Why Choose Us
      </h1>
      <h1 className="font-bold text-balance tracking-tight text-4xl text-center mb-5">
        No complexity, just results.
      </h1>
      <p className="text-lg text-center text-muted-foreground mb-5">
        {" "}
        Tell us your goal. Get your custom path. Skip the overwhelm.{" "}
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
        <Card className="mt-5">
          <div className="relative">
            <Badge className="absolute top-3 right-6 py-2">
              <span className="text-muted text-center font-medium border-r px-1.5 uppercase border-border/40">
                step
              </span>
              2
            </Badge>
          </div>
          <div className="relative p-5">
            <h1 className="px-2 pb-4 font-semibold tracking-tighter">
              AI generates your custom path
            </h1>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Analyzing your goals...
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
                <div className="size-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Finding optimal resources...
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
                <div className="size-2 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Creating learning roadmap...
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="mt-5">
          <div className="relative">
            <Badge className="absolute top-3 right-6 py-2">
              <span className="text-muted text-center font-medium border-r px-1.5 uppercase border-border/40">
                step
              </span>
              3
            </Badge>
          </div>
          <div className="relative p-5">
            <h1 className="px-2 pb-4 font-semibold tracking-tighter">
              Explore your personalized skill tree
            </h1>
            <div className="relative">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold text-sm shadow-lg">
                  Goal
                </div>

                <div className="w-px h-4 bg-border"></div>

                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-8 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center">
                      <div className="size-3 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Basics
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-8 rounded-full bg-yellow-100 border-2 border-yellow-500 flex items-center justify-center">
                      <div className="size-3 rounded-full bg-yellow-500"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">Tools</span>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-8 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center">
                      <div className="size-3 rounded-full bg-purple-500"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Advanced
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-muted/30 border">
                <p className="text-xs text-muted-foreground text-center">
                  Click any node to explore resources, tutorials, and practice
                  projects
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
