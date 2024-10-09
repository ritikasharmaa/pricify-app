import * as React from "react";
import RoundedButton, { ButtonsVariant } from "../Buttons/RoundedButton";

export type MultibuttonVariants = Exclude<
  ButtonsVariant,
  "DEFAULT" | "UNSTYLED"
>;

export type MultiButton = {
  id: string;
  text: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

interface MultibuttonsProps {
  buttons: MultiButton[];
  variant?: MultibuttonVariants;
  defaultActiveIndex?: number;
  activeIndex?: number;
  onClick?: (index: number) => void;
}

const MultiButtons = ({
  buttons,
  variant = ButtonsVariant.PRIMARY,
  defaultActiveIndex = 0,
  activeIndex,
  onClick = () => {},
}: MultibuttonsProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(
    defaultActiveIndex < buttons.length ? defaultActiveIndex : 0
  );

  React.useEffect(() => {
    if (typeof activeIndex !== "number") return;

    setActiveButtonIndex(() => {
      if (activeIndex < buttons.length) {
        return activeIndex;
      } else {
        return 0;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="flex gap-1 justify-center">
      {buttons.map((button, index) => {
        return (
          <RoundedButton
            key={button.id}
            text={button.text}
            onClick={() => onClick(index)}
            leftIcon={button.leftIcon}
            rightIcon={button.rightIcon}
            variant={
              activeButtonIndex === index ? variant : ButtonsVariant.DEFAULT
            }
          />
        );
      })}
    </div>
  );
};

export default MultiButtons;
