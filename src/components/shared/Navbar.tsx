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
    <header
      className={cn(
        "sticky h-20  transition-all duration-300 ",
        scrolled ? "top-5 px-6" : "top-0"
      )}
    >
      <div
        className={cn(
          "flex justify-between container mx-auto  transition-all duration-600 rounded-2xl",
          scrolled
            ? "bg-background/75 backdrop-blur-lg shadow-lg max-w-5xl py-4 px-5 "
            : "bg-background max-w-7xl py-4 px-8"
        )}
      >
        <div className="flex items-center gap-2   ">
          <img src="skilltree.png" alt="Logo" className="w-28  " />
          <h1 className="hidden border-l border-gray-300 px-2 sm:block font-bold text-[13px] sm:text-sm ">
            The AI Path
          </h1>
        </div>
        <RainbowButton className="text-xs sm:text-sm rounded-full">
          {" "}
          Get started
        </RainbowButton>
      </div>
    </header>
  );
}
