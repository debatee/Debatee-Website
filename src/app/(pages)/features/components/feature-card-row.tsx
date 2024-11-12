import { Feature } from "@/app/model/feature-model";
import Image, { StaticImageData } from "next/image";
import FeatureCard from "./feature-card";

export default function FeatureCardRow(
    {
        features
    }: {
        features: Feature[]
    }
) {
    const firstFeature = features[0]
    const secondFeature = features[1]

    return (
        <div className="flex flex-col md:flex-row w-full space-y-[32px] md:space-y-[0px] space-x-[0px] xl:space-x-[160px]">
            <div className="w-full md:w-1/2 md:pr-[40px] xl:pr-[0px]">
                <FeatureCard
                    feature={firstFeature}
                />
            </div>

            <div className="w-full md:w-1/2 md:pt-[20%] md:pl-[40px] xl:pl-[0px]">
                <FeatureCard
                    feature={secondFeature}
                />
            </div>
        </div>
    );
}