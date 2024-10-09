import * as React from "react";
import {
  PeriodUnit,
  Price,
  PricingTable as PricingTableType,
} from "../../types";
import { PriceTableActions } from "./actions";
import { initialState, reducer } from "./Reducer";

type PriceByCurrencies = {
  currency: string;
  prices: (Price | null)[];
};
export interface PriceTableContextType {
  state: PricingTableType;
  updatePricesInItems: (PricingTable: PricingTableType) => void;
  getPricesBasedOnCurrencies: () => PriceByCurrencies[];
}

export const PriceTableContext = React.createContext<
  PriceTableContextType | undefined
>(undefined);

const Periods = Object.values(PeriodUnit); // PeriodUnit is an enum

const PriceTableContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value: PriceTableContextType = {
    state,
    updatePricesInItems: (PricingTable: PricingTableType) => {
      dispatch({
        type: PriceTableActions.UPDATE_PRICE_FIELDS_IN_ITEMS,
        payload: PricingTable,
      });
    },
    getPricesBasedOnCurrencies: (): PriceByCurrencies[] => {
      if (Object.keys(state).length === 0) return [];

      const prices = state?.prices;
      const pricesByCurrencies: PriceByCurrencies[] = [];

      prices?.forEach((price) => {
        const index = pricesByCurrencies.findIndex(
          (field) => field.currency === price.currency
        );

        const itemIndex = state.items.findIndex(
          (item) => item.id === price.item_id
        );

        const orderIndex = state.items[itemIndex].order;

        const changeValueAtIndex =
          orderIndex * Periods.length + Periods.indexOf(price.period_unit);

        if (index < 0) {
          const newField: PriceByCurrencies = {
            currency: "",
            prices: [],
          };

          newField.currency = price.currency;
          newField.prices = Array(state.items.length * Periods.length).fill(
            null
          );

          newField.prices[changeValueAtIndex] = price;

          pricesByCurrencies.push(newField);
        } else {
          pricesByCurrencies[index].prices[changeValueAtIndex] = price;
        }
      });
      return pricesByCurrencies;
    },
  };

  return (
    <PriceTableContext.Provider value={value}>
      {children}
    </PriceTableContext.Provider>
  );
};

export default PriceTableContextProvider;
