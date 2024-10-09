import React from "react";
import { PriceTableContext } from "../../../../contexts/PriceTableContext";
import Heading from "../../../UI/Heading";
import EditablePriceField from "./EditablePriceField";
import PricingPlanTableHead from "./PricingPlanTableHead";

interface ManagePricingTableProps {
  isEditable?: boolean;
}

const ManagePricingTable = ({
  isEditable = false,
}: ManagePricingTableProps) => {
  const context = React.useContext(PriceTableContext);

  const fieldsByCurrency = context?.getPricesBasedOnCurrencies();

  if (!fieldsByCurrency) return <></>;

  return (
    <div className="mt-8 overflow-x-scroll no-scrollbar ">
      <table className="manage-pricing_table w-full bg-white border border-warmGray-200 h-auto shadow-lg ">
        <PricingPlanTableHead />
        <tbody>
          {fieldsByCurrency?.map((field) => (
            <tr key={field.currency}>
              {[
                <td key={field.currency}>
                  <div>
                    <div className="flex gap-1 items-center">
                      <Heading variant="h5" className="text-stone-600">
                        {field.currency}
                      </Heading>
                    </div>
                  </div>
                </td>,
                field?.prices?.map((price) => (
                  <EditablePriceField
                    price={price || undefined}
                    isEditable={isEditable}
                    key={price?.id}
                  />
                )),
              ]}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePricingTable;
