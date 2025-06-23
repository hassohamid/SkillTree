import { RainbowButton } from "../magicui/rainbow-button";

export default function Navbar() {
  return (
    <header className="sticky top-0  h-20 px-2 ">
      <div className="flex justify-between container max-w-6xl mx-auto bg-white p-4   rounded-md">
        <div className="flex items-center gap-2   ">
          <img
            src="skilltree.png"
            alt="Logo"
            className="sm:w-33 w-30 border-r  p-2 "
          />
          <h1 className="font-bold text-[13px] sm:text-sm ">The AI Path</h1>
        </div>
        <RainbowButton className="text-xs sm:text-sm rounded-full">
          {" "}
          Get started
        </RainbowButton>
      </div>
    </header>
  );
}
