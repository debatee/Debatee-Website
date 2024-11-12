import { Feature } from "@/app/model/feature-model"
import { clsx } from "clsx"
import Image from "next/image"

export default function FeatureCard(
    {
        className = "",
         feature
    }: {
        className?: string,
        feature: Feature
    }
) {
    return (
        <div className={clsx(
            "flex flex-col w-full",
            className,
        )}>
            <Image
                src={feature.image}
                alt={feature.firstTitle + feature.secondTitle}
                className="w-full h-auto"
                sizes="100vw"
                objectFit="contain"
            />
            <div className="flex flex-col py-[56px] px-[48px] space-y-[24px] rounded-b-3xl bg-white  drop-shadow-md">
                <div className="inline-block text-2xl xl:text-5xl font-bold">
                    <p className="inline text-black">{feature.firstTitle}</p>
                    <p className="inline text-blue">{feature.secondTitle}</p>
                </div>

                <p className="text-xl xl:text-3xl text-gray-700">{feature.subtitle}</p>
            </div>
        </div>
    )
}