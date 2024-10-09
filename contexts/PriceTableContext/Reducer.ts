import { PricingTable } from "../../MockPricingTableData";
import type { PricingTable as PricingTableType } from "../../types";
import { PriceTableActions } from "./actions";

export const reducer = (
  state: PricingTableType,
  action: { type: PriceTableActions; payload?: any }
) => {
  switch (action.type) {
    case PriceTableActions.UPDATE_PRICE_FIELDS_IN_ITEMS: {
      const data = action.payload as PricingTableType;
      let items = [...data.items];
      items = items.map((item) => {
        const prices = data.prices.filter((price) => price.item_id === item.id);
        return {
          ...item,
          prices,
        };
      });

      return {
        ...data,
        items,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const initialState: PricingTableType = {} as PricingTableType;
