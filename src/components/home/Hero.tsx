import { RainbowButton } from "../magicui/rainbow-button";

export default function Hero() {
  return (
    <div className="container mx-auto flex max-w-6xl flex-col justify-center sm:text-center mt-30 gap-3 ">
      <h1 className="  py-4 text-5xl font-semibold tracking-tight text-balance md:text-7xl lg:mt-16  bg-gradient-to-br from-neutral-950 from-20% to-neutral-500 bg-clip-text text-transparent dark:from-white dark:from-20% dark:to-neutral-800 pl-8 lg:pl-0 ">
        Turn your goals into a visual map instantly
        <span className="text-green-300">.</span>
      </h1>
      <p className="text-balance tracking-tight leading-relaxed pl-8 md:pl-0  mx-auto max-w-xl text-md md:text-lg md:max-w-full  ">
        Wasting hours jumping between YouTube videos and docs? Skilltree gives
        you a custom, game-like roadmap built around your goals—so you stop
        guessing and start learning.
      </p>
      <div className="relative flex flex-col gap-2">
        <RainbowButton className="mx-auto rounded-full py-5 px-15 mt-5 font-bold ">
          Generate Your Skilltree
        </RainbowButton>
        <p className="text-xs  text-center text-foreground/70 tracking-tighter font-medium">
          Try for free. No credit card required.
        </p>
        <div className="absolute h-45 w-45 bg-blue-400 left-1/2 -translate-x-1/2  opacity-25 top-10  rounded-full pointer-events-none blur-3xl"></div>
      </div>
    </div>
  );
}
