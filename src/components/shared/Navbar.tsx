import { useEffect, useState } from "react";
import { RainbowButton } from "../magicui/rainbow-button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex justify-center w-full max-w-4xl mx-auto  blur-3xl opacity-25 sm:opacity-15 lg:opacity-20 absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full pointer-events-none -z-50">
        <div className="bg-pink-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-yellow-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-purple-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-green-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-blue-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
      </div>
      <header
        className={cn(
          " sticky h-20 z-20  transition-all duration-300 bg-transparent   ",
          scrolled ? "top-5 px-6" : "top-0 border-0"
        )}
      >
        <div
          className={cn(
            "flex justify-between container mx-auto  transition-all duration-600 rounded-2xl  ",
            scrolled
              ? "bg-background/75 backdrop-blur-lg shadow-lg max-w-5xl py-4 px-5 border-1 "
              : "bg-transparent max-w-7xl py-4 px-8 border-0 shadow-none backdrop-blur-none "
          )}
        >
          <div className="flex items-center gap-2  ">
            <img src="skilltree.png" alt="Logo" className="w-28  " />
            <h1 className="hidden border-l border-gray-300 px-2 py-0.5 sm:block font-semibold text-[13px] sm:text-sm ">
              The AI Path
            </h1>
          </div>
          <RainbowButton className="text-xs sm:text-sm rounded-full ">
            {" "}
            Sign in
          </RainbowButton>
        </div>
      </header>
    </>
  );
}
