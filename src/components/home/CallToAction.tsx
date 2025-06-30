import { RainbowButton } from "../magicui/rainbow-button";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/180632791?v=4",
    profileUrl: "https://github.com/hassohamid",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/hassohamid",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/hassohamid",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/hassohamid",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/hassohamid",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/hassohamid",
  },
];

export default function CallToAction() {
  return (
    <div>
      <div className="flex justify-center w-full max-w-4xl mx-auto  blur-3xl opacity-45 sm:opacity-15 lg:opacity-20 absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full pointer-events-none -z-50 mt-20">
        <div className="bg-pink-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-yellow-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-purple-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-green-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
        <div className="bg-blue-400 h-20 sm:h-40 md:h-60 w-1/4"></div>
      </div>
      <div className=" flex items-center justify-center mt-50 flex-col gap-1 ">
        <h1 className="font-semibold tracking-tight">
          Join <span className="font-black text-green-500 ">10,000+</span>
          learners who ditched tutorial hell
        </h1>
        <AvatarCircles numPeople={99} avatarUrls={avatars} />
        <RainbowButton className="font-bold px-12 py-5 rounded-full mt-4">
          Try now for free
        </RainbowButton>
      </div>
    </div>
  );
}
