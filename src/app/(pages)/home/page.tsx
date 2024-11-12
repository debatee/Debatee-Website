import Image from "next/image"
import HomeIllustration from "../../../../public/HomeIllustration.svg"
import LinkButton from "@/app/_components/button/link-button"
import { FaApple } from "react-icons/fa";

export default function HomeSection() {
    return (
      <section id="home" className="flex w-full bg-blue-primary">
        <div className="flex flex-col lg:relative space-y-[32px] lg:space-y-[0px] py-[32px] px-[32px] lg:py-[160px] lg:px-[120px] w-full bg-white rounded-b-[90px]">
            <div className="flex flex-col w-full lg:w-3/5 space-y-[80px] z-10">
                <div className="flex flex-col 2-full space-y-[32px]">
                    <div className="inline-block text-4xl md:text-7xl">
                        <p className="inline text-black font-medium">Master the Art of Debating with <br></br></p>
                        <p className="inline text-blue font-bold">Debatee</p>
                    </div>
                    <p className="w-2/3 lg:w-1/2 text-black text-3xl">Build confidence with interactive sparring and instant feedback</p>
                </div>
                <LinkButton className="w-fit" href="/">
                    <div className="flex flex-row space-x-[16px] items-center">
                        <FaApple size={20}/>
                        <p>Download Now</p>
                    </div>
                </LinkButton>
            </div>
            <div className="lg:absolute lg:right-[160px] lg:top-1/2 lg:transform lg:-translate-y-1/2">
                <Image
                    src={HomeIllustration}
                    alt="Home"
                    className="w-full lg:max-w-[700px] h-auto"
                    sizes="100vw"
                    objectFit="contain"
                />
            </div>
        </div>
      </section>
    )
}