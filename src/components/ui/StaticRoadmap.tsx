"use client";

import { AnimatePresence } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function StaticRoadmap() {
  return (
    <>
      <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center  w-full mx-auto p-4 relative h-[30rem]  ">
        <AnimatePresence>
          <div className="h-full w-full absolute inset-0 ">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <div className="relative z-20">
          <div className="text-center gap-2 flex-col group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            <div className="flex gap-1 items-center">
              <img src="croplogo.png" className="h-12 invert" />
              <h1 className="bg-gradient-to-br to-purple-300 from-30% from-white bg-clip-text text-transparent font-black tracking-widest text-2xl ">
                {" "}
                ROADMAP
              </h1>
            </div>
          </div>
          <h2 className=" text-xs tracking-tight opacity-0 group-hover/canvas-card:opacity-90 relative z-10 font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 uppercase ">
            Sign in to view your roadmap
          </h2>
        </div>
      </div>
    </>
  );
}
