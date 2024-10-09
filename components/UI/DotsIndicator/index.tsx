interface DotsIndicatorProps {
  activeIndex?: number;
  dotsCount?: number;
}

const DotsIndicator = ({
  activeIndex = 0,
  dotsCount = 3,
}: DotsIndicatorProps) => {
  const dots = Array.from({ length: dotsCount }).fill("DUMMY");

  return (
    <div className="flex gap-2.5">
      {dots.map((_, index) => {
        return (
          <div
            className={
              "rounded-full w-2.5 h-2.5 border border-stone-600 " +
              (activeIndex === index ? "bg-stone-600" : "")
            }
            key={"DOT-" + index}
          />
        );
      })}
    </div>
  );
};

export default DotsIndicator;
