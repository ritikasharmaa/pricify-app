import { useRouter } from "next/router";
import { CustomizePricingIcon } from "../../assets/icons";
import { ButtonsVariant } from "../UI/Buttons/RoundedButton";
import DotsIndicator from "../UI/DotsIndicator";
import Heading from "../UI/Heading";
import MultiButtons from "../UI/MultiButtons";

const pricingScreenButtons = [
  {
    id: "0",
    text: "I have changed all the prices →",
  },
  {
    id: "1",
    text: "Cancel",
  },
];

const runExperimentScreenButtons = [
  {
    id: "0",
    text: "← Previous",
  },
  {
    id: "1",
    text: "Run Experiment",
  },
  {
    id: "3",
    text: "Cancel",
  },
];

interface NewExperimentHeaderProps {
  hasChangedPrices: boolean;
  setHasChangedPrices: (value: boolean) => void;
}

const NewExperimentHeader = ({
  hasChangedPrices,
  setHasChangedPrices,
}: NewExperimentHeaderProps) => {
  const router = useRouter();

  const handleMultiButtonsClick = (idx: number) => {
    if (hasChangedPrices) {
      if (idx === 0) {
        // in case of "Previous" click
        setHasChangedPrices(false);
      } else if (idx === 1) {
        // in case of "Run experiment" click
        console.log("Running experiment");
      } else if (idx === 2) {
        // in case of "Cancel" click
        router.replace("/manage-pricing");
      }
    } else {
      if (idx === 0) {
        // in case of "I have changed all the prices →" click
        setHasChangedPrices(true);
      } else if (idx === 1) {
        // in case of "Cancel" click
        router.replace("/manage-pricing");
      }
    }
  };

  return (
    <div className="bg-white shadow-lg h-[166px] flex flex-col items-center justify-center sticky top-0 z-[1]">
      <DotsIndicator dotsCount={2} activeIndex={hasChangedPrices ? 1 : 0} />
      <Heading
        className="mt-2 mb-6"
        text="Setup - New Price Elasticity Experiment"
        variant="h4"
      />
      <MultiButtons
        variant={ButtonsVariant.SECONDARY}
        buttons={
          hasChangedPrices ? runExperimentScreenButtons : pricingScreenButtons
        }
        onClick={(idx) => handleMultiButtonsClick(idx)}
        defaultActiveIndex={hasChangedPrices ? 1 : 0}
        activeIndex={hasChangedPrices ? 1 : 0}
      />
    </div>
  );
};

export default NewExperimentHeader;
