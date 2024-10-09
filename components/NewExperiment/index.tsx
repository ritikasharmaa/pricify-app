import * as React from "react";
import { PriceTableContext } from "../../contexts/PriceTableContext";
import { PricingTable } from "../../MockPricingTableData";
import NewExperimentContent from "./NewExperimentContent";
import NewExperimentHeader from "./NewExperimentHeader";

const NewExperiment = () => {
  const [hasChangedPrices, setHasChangedPrices] = React.useState(false);
  const context = React.useContext(PriceTableContext);

  React.useEffect(() => {
    context?.updatePricesInItems(PricingTable);
  }, []);

  return (
    <div className="bg-warmGray-200 min-h-screen h-auto">
      <NewExperimentHeader
        setHasChangedPrices={setHasChangedPrices}
        hasChangedPrices={hasChangedPrices}
      />
      <NewExperimentContent hasChangedPrices={hasChangedPrices} />
    </div>
  );
};

export default NewExperiment;
