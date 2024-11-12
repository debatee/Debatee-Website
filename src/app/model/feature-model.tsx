import { StaticImageData } from "next/image";
import Argument from '../../../public/Argument.svg'
import CaseBuilding from '../../../public/CaseBuilding.svg'
import FindOpponent from '../../../public/FindOpponent.svg'
import MatterBank from '../../../public/MatterBank.svg'
import Practice from '../../../public/Practice.svg'
import Rebuttal from '../../../public/Rebuttal.svg'

export type Feature = {
    firstTitle: string;
    secondTitle: string;
    subtitle: string;
    image: StaticImageData
}

export const features: Feature[] = [
    {
        firstTitle: "Argument ",
        secondTitle: "Development",
        subtitle: "Refine your speech to strengthen your reasoning.",
        image: Argument
    },
    {
        firstTitle: "Rebuttal ",
        secondTitle: "Practice",
        subtitle: "Challenge yourself to dismantle opposing arguments with precision.",
        image: Rebuttal
    },
    {
        firstTitle: "Matterbank ",
        secondTitle: "Materials",
        subtitle: "Access a curated library of resources to enrich your knowledge and bolster your arguments.",
        image: MatterBank
    },
    {
        firstTitle: "Find Opponent ",
        secondTitle: "Anytime",
        subtitle: "Never wait to spar, connect instantly with opponents and keep your debate skills sharp.",
        image: FindOpponent
    },
    {
        firstTitle: "Practice With ",
        secondTitle: "No Limits",
        subtitle: "Whether it’s a quick drill or a full session, Debatee lets you practice on your schedule.",
        image: Practice
    },
    {
        firstTitle: "Case ",
        secondTitle: "Building",
        subtitle: "Practice creating structured, compelling cases in timed sessions.",
        image: CaseBuilding
    },
]