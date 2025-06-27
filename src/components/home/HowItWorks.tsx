import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { User, LoaderPinwheel, Network } from "lucide-react";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const output1Ref = useRef<HTMLDivElement>(null);
  const output2Ref = useRef<HTMLDivElement>(null);
  const output3Ref = useRef<HTMLDivElement>(null);
  const output4Ref = useRef<HTMLDivElement>(null);

  return (
    <div className=" flex flex-col items-center justify-center  py-10 px-3  mx-auto  mt-40 relative max-w-4xl overflow-hidden">
      <h1 className="text-muted-foreground uppercase tracking-wider font-medium text-sm mb-5">
        {" "}
        Process{" "}
      </h1>
      <h1 className="font-bold tracking-tighter text-4xl  text-center text-balance mb-4">
        {" "}
        Everything you need to get started is{" "}
        <Badge className="text-lime-500 bg-neutral-950 text-3xl text-center pr-3 font-extrabold">
          1
        </Badge>{" "}
        prompt{" "}
      </h1>
      <p className="text-muted-foreground text-lg text-center">
        {" "}
        Mastering something has never been easier.
      </p>
      <Card className="w-full relative mt-5 shadow-xl bg-neutral-100/30 border-2 ">
        <div
          className="relative flex  w-full items-center justify-between max-w-full px-8"
          ref={containerRef}
        >
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-xs sm:text-sm text-muted-foreground tracking-tight font-medium ">
              {" "}
              User input{" "}
            </p>
            <div
              ref={userRef}
              className="z-10 shadow-2xl flex size-10 sm:size-14 p-2 items-center justify-center rounded-full border bg-white "
            >
              <User strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-1 items-center">
            <p className="text-xs sm:text-sm text-muted-foreground tracking-tight font-medium ">
              AI analysis
            </p>
            <div
              ref={aiRef}
              className="z-10 flex size-10 sm:size-14 p-2 items-center justify-center rounded-full border bg-white  shadow-2xl"
            >
              <LoaderPinwheel className="animate-spin" strokeWidth={1} />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <div
              ref={output1Ref}
              className="z-10 flex size-10 sm:size-12 p-2 items-center justify-center rounded-full border bg-white  shadow-xl"
            >
              <Network strokeWidth={1.5} />
            </div>
            <div
              ref={output2Ref}
              className="z-10 flex size-10 sm:size-12 p-2 items-center justify-center rounded-full border bg-white  shadow-xl"
            >
              <Network strokeWidth={1.5} />
            </div>
            <div
              ref={output3Ref}
              className="z-10 flex size-10 sm:size-12 p-2 items-center justify-center rounded-full border bg-white  shadow-xl"
            >
              <Network strokeWidth={1.5} />
            </div>
            <div
              ref={output4Ref}
              className="z-10 flex size-10 sm:size-12 p-2 items-center justify-center rounded-full border bg-white  shadow-xl"
            >
              <Network strokeWidth={1.5} />
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={userRef}
            toRef={aiRef}
            duration={10}
            delay={2}
            gradientStartColor="blue"
            gradientStopColor="blue"
            pathWidth={4}
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={aiRef}
            toRef={output1Ref}
            duration={1}
            delay={3}
            gradientStartColor="white"
            gradientStopColor="white"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={aiRef}
            toRef={output2Ref}
            duration={1}
            delay={3}
            gradientStartColor="white"
            gradientStopColor="white"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={aiRef}
            toRef={output3Ref}
            duration={1}
            delay={3}
            gradientStartColor="white"
            gradientStopColor="white"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={aiRef}
            toRef={output4Ref}
            duration={1}
            delay={3}
            gradientStartColor="white"
            gradientStopColor="white"
          />
        </div>

        <BorderBeam
          size={300}
          duration={30}
          delay={7.5}
          colorTo="#84cc16"
          className="from-transparent to-transparent"
        />

        <BorderBeam
          size={300}
          duration={30}
          delay={22.5}
          colorTo="#84cc16"
          className="from-transparent to-transparent"
        />
      </Card>
    </div>
  );
}
