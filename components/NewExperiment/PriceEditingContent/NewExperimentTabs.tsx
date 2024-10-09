import { NewExperimentTabIndex } from ".";
import RoundedButton, { ButtonsVariant } from "../../UI/Buttons/RoundedButton";

interface NewExperimentTabsProps<T> {
  activeIndex: T;
  onClick?: (index: T) => void;
}

const NewExperimentTabs = ({
  activeIndex = 0,
  onClick = () => {},
}: NewExperimentTabsProps<NewExperimentTabIndex>) => {
  const commonClasses =
    "w-48 flex justify-center items-center border-b-4 h-[52px] rounded cursor-pointer ";

  const getStyles = (index: number) => {
    if (index === activeIndex && activeIndex === 0) {
      return "bg-purple-100 border-purple-600";
    } else if (index === activeIndex && activeIndex === 1) {
      return "bg-sky-100  border-sky-600";
    } else {
      return "";
    }
  };

  return (
    <div className="flex">
      <RoundedButton
        onClick={() => onClick(0)}
        variant={ButtonsVariant.UNSTYLED}
        className={commonClasses + " " + getStyles(0)}
      >
        <span className="text-purple-500">◆ &nbsp;</span>
        <span>Control [Default]</span>
      </RoundedButton>

      <RoundedButton
        onClick={() => onClick(1)}
        variant={ButtonsVariant.UNSTYLED}
        className={commonClasses + " " + getStyles(1)}
      >
        <span className="text-sky-500">■ &nbsp; </span>
        <span>Treatment [A] </span>
      </RoundedButton>
    </div>
  );
};

export default NewExperimentTabs;
