import Link from "next/link";
import * as React from "react";
import { AlertIcon } from "../../assets/icons";
import { PriceTableContext } from "../../contexts/PriceTableContext";
import { PricingTable } from "../../MockPricingTableData";
import Heading from "../UI/Heading";
import MessageBar from "../UI/MessageBar";
import ManagePricingPlans from "./ManagePricingPlan";

const ManagePricing = () => {
  const context = React.useContext(PriceTableContext);

  React.useEffect(() => {
    context?.updatePricesInItems(PricingTable);
  }, []);

  const RightAction = () => {
    return (
      <Link href="/manage-pricing">
        <p className="font-medium cursor-pointer text-blue-600 hover:underline">
          See more insights →
        </p>
      </Link>
    );
  };

  return (
    <div className="bg-warmGray-200 min-h-screen py-12 w-full flex justify-center">
      <div className="w-full flex items-center flex-col flex-1">
        <MessageBar
          variant="Alert"
          className="w-[473px]"
          leftIcon={<AlertIcon />}
          description="You have a wide price parity between your currencies"
          rightActionComp={<RightAction />}
        />
        <div className="mt-8">
          <Heading variant="h2" className="text-center">
            Pricing Overview
          </Heading>
          <p className="mt-2 text-sm font-normal">
            👀 Add all of your plans you wish to see in your pricing page here.
            more▽
          </p>
        </div>

        <ManagePricingPlans />
      </div>
    </div>
  );
};

export default ManagePricing;
