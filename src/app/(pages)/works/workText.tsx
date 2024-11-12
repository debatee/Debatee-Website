export default function WorkText({ number, heading, subheading }: Readonly<{ number: string; heading: string; subheading: string }>) {
  return (
    <div className="flex-col space-y-5 w-full md:w-5/12">
      <div className="font-semibold text-3xl md:text-6xl">{number}</div>
      <div className="w-full flex justify-center">
        <div className="h-0.5 bg-white w-full"></div>
      </div>
      <div className="flex-col space-y-6">
        <div className="font-semibold text-xl md:text-3xl">{heading}</div>
        <div className="font-normal text-base md:text-xl">{subheading}</div>
      </div>
    </div>
  );
}
