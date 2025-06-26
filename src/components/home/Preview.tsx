import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function Preview() {
  return (
    <div className="container mx-auto flex flex-col  max-w-4xl mt-40 px-5">
      <h1 className="text-center uppercase font-medium text-sm mb-10 text-muted-foreground tracking-wider ">
        Preview
      </h1>
      <HeroVideoDialog
        className="block  "
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/ARYM9ebZ6r8"
        thumbnailSrc="skillt.jpg"
        thumbnailAlt="Live Demo showcasing the use of Skilltree"
      />
    </div>
  );
}
