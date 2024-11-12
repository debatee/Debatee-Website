import Image from "next/image";
import AboutText from "./components/about-text";
import AboutIllustration from "../../../../public/AboutUs.svg"
import MissionIllustration from "../../../../public/OurMission.svg"
import TeamIllustration from "../../../../public/OurTeam.svg"

export default function AboutSection() {
    return (
        <section id="about" className="flex w-full bg-blue-primary">
            <div className="flex flex-col w-full bg-white py-[120px] md:py-[240px] space-y-[120px] md:space-y-[240px] rounded-b-[90px]">
                <div className="flex flex-col md:flex-row w-full pe-[0px] md:pe-[120px] lg:pe-[160px] space-x-[0px] md:space-x-[60px] space-y-[32px] md:space-y-[0px] md:items-center">
                    <Image
                        src={AboutIllustration}
                        alt="About Us"
                        className="max-w-full w-2/3 md:w-1/2 lg:w-2/5 h-auto"
                        sizes="100vw"
                        objectFit="contain"
                    />

                    <div className="flex flex-col px-[60px] md:px-[0px] space-y-[32px] items-start text-start">
                        <div className="inline-block text-4xl md:text-5xl lg:text-6xl">
                            <p className="inline font-bold text-blue">About </p>
                            <p className="inline text-black">us, </p>
                        </div>

                        <AboutText
                            firstParagraph="Debatee was built with one goal: to help debaters reach their fullest potential. We’re passionate about fostering confident and effective communicators born from real debate experiences and challenges."
                            secondParagraph="Debatee aims to provide debaters with practical tools to overcome hurdles, sharpen their skills, and succeed in any setting. Whether you're stepping into your first debate or have years of experience, Debatee is here to guide and challenge you."
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full ps-[0px] md:ps-[120px] lg:ps-[160px] space-x-[0px] md:space-x-[60px] items-end md:items-center">
                    <div className="flex flex-col px-[60px] md:px-[0px] space-y-[32px] pt-[32px] md:pt-[0px] items-start text-start order-last md:order-1">
                        <div className="inline-block text-4xl md:text-5xl lg:text-6xl">
                            <p className="inline text-black">Our </p>
                            <p className="inline font-bold text-blue">Mission, </p>
                        </div>

                        <AboutText
                            firstParagraph="Our mission is simple, to empower debaters to reach their highest potential. We believe that everyone should have access to high-quality, interactive debate training. "
                            secondParagraph="Through sparring, feedback, and comprehensive resources, we’re here to build confidence and critical thinking, equipping users to debate with clarity, conviction, and skill."
                        />
                    </div>

                    <Image
                        src={MissionIllustration}
                        alt="Our Mission"
                        className="max-w-full w-2/3 md:w-1/2 h-auto order-1 md:order-last"
                        sizes="100vw"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col md:flex-row w-full px-[60px] md:px-[0px] md:ps-[80px] lg:ps-[120px] md:pe-[120px] lg:pe-[160px] space-x-[0px] md:space-x-[60px] space-y-[32px] md:space-y-[0px] items-center">
                    <Image
                        src={TeamIllustration}
                        alt="Our Team"
                        className="max-w-full w-2/3 md:w-2/5 h-auto"
                        sizes="100vw"
                        objectFit="contain"
                    />

                    <div className="flex flex-col space-y-[32px] items-start text-start">
                        <div className="inline-block text-4xl md:text-5xl lg:text-6xl">
                            <p className="inline text-black">Our </p>
                            <p className="inline font-bold text-blue">Team, </p>
                        </div>

                        <AboutText
                            firstParagraph="We’re a team of passionate debaters, educators, and tech enthusiasts: Ryan Kusnadi, Fristania Verenita, Darren Thiores, Andrew Oroh, Riellvriany Indriawan, and Elisabet Indira Carmela. From product design to content development, we draw on our diverse backgrounds to create a platform that’s impactful, user-focused, and always evolving. "
                            secondParagraph="Together, we’re committed to fostering a supportive community where every user has the chance to learn, grow, and excel."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}