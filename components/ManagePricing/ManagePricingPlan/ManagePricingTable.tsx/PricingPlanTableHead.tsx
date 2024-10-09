import * as React from "react";
import { PriceTableContext } from "../../../../contexts/PriceTableContext";
import { Item, PeriodUnit } from "../../../../types";
import RoundedButton, {
  ButtonsVariant,
} from "../../../UI/Buttons/RoundedButton";
import Heading from "../../../UI/Heading";

// TODO:  need to make the design according to the API response

const Periods = Object.values(PeriodUnit);

const PricingPlanTableHead = () => {
  const context = React.useContext(PriceTableContext);
  const { items } = context?.state || {};

  if (!items) return <></>;
  return (
    <>
      <thead>
        <tr className="h-44 ">
          <td />
          {items?.map((item) => (
            <td key={item.id} colSpan={Periods.length}>
              <div>
                <Heading variant="h3">{item.name}</Heading>
                <p className="text-sm font-normal	mt-1">{item.description}</p>
                <RoundedButton
                  variant={ButtonsVariant.UNSTYLED}
                  className="mt-2"
                >
                  <p className="text-xs text-blue-600">
                    +Add/Edit Description, Features
                  </p>
                </RoundedButton>
              </div>
            </td>
          ))}
        </tr>
      </thead>
      <thead className="bg-stone-200 h-5 w-full border border-warmGray-200 ">
        <tr>
          <td></td>
          {items?.map((item) =>
            Periods.map((period) => (
              <td key={item.id + period}>
                <div>
                  <p className="text-xxs tracking-widest">
                    {period.toUpperCase()}
                  </p>
                </div>
              </td>
            ))
          )}
        </tr>
      </thead>
    </>
  );
};

export default PricingPlanTableHead;
