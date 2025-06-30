import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do you create my learning roadmap?",
      answer:
        "Our trained AI analyzes your goals and current skill level to generate a personalized learning path. We research and curate the best resources available online, then organize them in the optimal order for your success.",
    },
    {
      question: "Do you provide your own courses or content?",
      answer:
        "No, we don't create our own content. Instead, we do the heavy lifting of researching and finding the absolute best resources, tutorials, and courses already available online. We're like your personal learning curator.",
    },
    {
      question: "How accurate are the time estimates?",
      answer:
        "Our time estimates are based on average learning speeds and resource lengths. Everyone learns at their own pace, so use these as guidelines. You can always adjust your schedule and mark items complete when you're ready.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Absolutely! You can mark resources as complete, track your progress through each branch of your skilltree, and see how far you've come. It's designed to keep you motivated and organized.",
    },
    {
      question: "What if I want to learn something very specific or niche?",
      answer:
        "Our AI is trained to handle both popular and niche learning goals. Just describe what you want to learn as specifically as possible, and we'll find the best resources available for that exact skill or topic.",
    },
    {
      question: "Are the resources free or paid?",
      answer:
        "We curate a mix of both free and paid resources. We'll always indicate which is which, and often include free alternatives. Our goal is to find you the best learning path regardless of budget.",
    },
    {
      question: "Can I modify my roadmap after it's generated?",
      answer:
        "Yes! Your roadmap is flexible. You can skip resources that don't fit your learning style, add notes, and even request modifications if your goals change along the way.",
    },
    {
      question: "How is this different from just googling tutorials?",
      answer:
        "We eliminate the overwhelm of choice and research paralysis. Instead of spending hours figuring out what to learn first and which resources are worth your time, we give you a clear, optimized path from day one.",
    },
  ];

  return (
    <div className="flex flex-col container mx-auto items-center mt-35 max-w-4xl px-6">
      <h1 className="uppercase text-sm font-medium text-muted-foreground tracking-wider mb-5">
        FAQ
      </h1>
      <h1 className="font-bold text-balance tracking-tight text-4xl md:text-6xl text-center mb-10 bg-gradient-to-br from-neutral-950 from-20% to-neutral-500 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border rounded-2xl px-4 py-0.5 [&:last-child]:border-b"
            >
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="text-foreground/80 mb-12 text-center text-sm font-medium tracking-tight mt-10">
        <h1>
          Still have questions? Email us at{" "}
          <span className="underline">hello@skilltree.app</span>
        </h1>
      </div>
    </div>
  );
}
