import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Honestly, I had no idea where to start with coding. Been watching random YouTube videos for weeks and getting nowhere. Found Skilltree and boom - finally had a plan that made sense. Got my first dev job last month!",
    name: "Michael Rodriguez",
    designation: "Junior Developer",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I was drowning in Python tutorials and machine learning videos. Couldn't figure out what to learn first. Skilltree basically told me 'do this, then this, then this' and it actually worked. Saved me so much time.",
    name: "Sarah Chen",
    designation: "Computer Science Student",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Between work and kids, I maybe get 2 hours a week to study. Skilltree helped me not waste that time on random stuff. Finally learned Figma properly and landed some freelance projects!",
    name: "Ben Watson",
    designation: "Career Changer",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG97by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Was spending hours googling 'how to learn digital marketing' and getting overwhelmed by all the options. Skilltree gave me a roadmap that actually made sense. Way better than trying to figure it out myself.",
    name: "James Kim",
    designation: "Freelancer",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Tutorial hell is real. I'd start a course, get distracted by another one, never finish anything. Skilltree kept me focused on one thing at a time. Finally built something I'm actually proud of.",
    name: "John Thompson",
    designation: "Bootcamp Graduate",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Testimonials() {
  return (
    <div className="mt-35 max-w-6xl xl:border mx-auto relative   xl:rounded-lg   ">
      <h1 className="text-center text-5xl font-extrabold tracking-tight md:mt-10 ">
        {" "}
        <span className="text-green-400">Happy</span> users
      </h1>
      <AnimatedTestimonials autoplay testimonials={testimonials} />
    </div>
  );
}
