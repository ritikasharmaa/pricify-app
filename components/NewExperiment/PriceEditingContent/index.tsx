import React from "react";
import { ThumbsUpIcon } from "../../../assets/icons";
import ManagePricingTable from "../../ManagePricing/ManagePricingPlan/ManagePricingTable.tsx";
import RoundedButton, { ButtonsVariant } from "../../UI/Buttons/RoundedButton";
import MessageBar from "../../UI/MessageBar";
import NewExperimentTabs from "./NewExperimentTabs";

export type NewExperimentTabIndex = 0 | 1; // need to rename this field and all the fields related to it.

const PriceEditingContent = () => {
  const [activeTabIndex, setActiveTabIndex] =
    React.useState<NewExperimentTabIndex>(1);

  return (
    <div>
      <MessageBar
        className="mt-7 w-max mx-auto"
        leftIcon={<ThumbsUpIcon />}
        description="The prices you change here will not affect you actual plans and prices in Chargebee."
        variant="Standard"
      />

      <div className="flex justify-between mt-16 w-[1084px] mx-auto">
        <div className="w-36">
          <p className="text-sm italic">
            Click on a price point ✏ to modify them
          </p>
        </div>
        <div>
          <NewExperimentTabs
            onClick={(idx) => setActiveTabIndex(idx)}
            activeIndex={activeTabIndex}
          />
        </div>
        <div>
          <RoundedButton
            variant={ButtonsVariant.DEFAULT}
            text="+ New Treatment"
          />
        </div>
      </div>

      <div className="w-[1084px] mx-auto pb-10">
        <ManagePricingTable isEditable />
      </div>
    </div>
  );
};

export default PriceEditingContent;
