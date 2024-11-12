import Image from "next/image";
import WorkText from "./workText";

export default function WorkSection() {
  return (
    <section id="works" className="flex flex-col p-0 md:flex-row bg-blue-primary">
      <div className="p-10 space-y-16 w-full md:pl-40 md:py-44 md:space-y-28">
        <div className="flex flex-col space-y-10 w-4/5">
          <div className="font-normal text-3xl md:text-6xl">
            How do <p className="inline font-bold">Debatee</p> Works?
          </div>
          <div className="font-normal text-xl md:text-3xl">
            <p className="inline font-bold">Debatee </p>
            sparring feature combines advanced AI and debate techniques to provide everything you need to succeed
          </div>
        </div>
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-28 md:space-y-0">
          <WorkText number="1" heading="Choose Your Own Role & Difficulty" subheading="Customize your sparring experience by selecting your role and challenge level." />
          <WorkText number="2" heading="Engage in Realistic Debate Simulations" subheading="Practice debating against AI opponents with dynamic scenarios that mirror real competitions." />
          <WorkText number="3" heading="Get Personalized AI Feedback" subheading="Receive clear, actionable feedback after each session so you can see where you excel and what to work on." />
        </div>
      </div>
      <Image className="mb-0 md:pt-36" src="/debateWorks.svg" alt="/next.svg" width={582} height={939} />
    </section>
  );
}
