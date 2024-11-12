export default function AboutText(
    {
        firstParagraph,
        secondParagraph
    }: {
        firstParagraph: string,
        secondParagraph: string
    }
) {
    return (
        <div className="flex flex-col space-y-[32px] items-start text-start text-xl md:text-2xl text-black">
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>
        </div>
    )
}