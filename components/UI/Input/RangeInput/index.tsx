interface RangeSliderProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  step?: number;
  className?: string;
  disabled?: boolean;
}

const RangeSlider = ({
  min = 0,
  max = 100,
  value,
  onChange = () => {},
  step,
  className = "",
  disabled = false,
}: RangeSliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      disabled={disabled}
      value={value}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      className={
        "h-2 accent-teal-400 bg-warmGray-300 rounded-lg  appearance-none cursor-pointer" +
        " " +
        className
      }
    />
  );
};

export default RangeSlider;
