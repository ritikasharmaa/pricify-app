import PriceEditingContent from "./PriceEditingContent";
import RunExperimentContent from "./RunExperimentContent";

interface NewExperimentContentProps {
  hasChangedPrices: boolean;
}

const NewExperimentContent = ({
  hasChangedPrices,
}: NewExperimentContentProps) => {
  return hasChangedPrices ? <RunExperimentContent /> : <PriceEditingContent />;
};

export default NewExperimentContent;
