export interface PricingTable extends AuditInfo {
  items: Item[];
  prices: Price[];
}

export type Item = {
  id: string;
  name: string;
  description: string;
  order: number;
  billing_system: string;
  billing_system_id: string;
  entitlements: string[];
  prices?: Price[];
};

export type Price = {
  id: string;
  item_id: string;
  name: string;
  type: PriceType;
  period: number;
  period_unit: PeriodUnit;
  amount: string;
  currency: string;
  billing_system: string;
  billing_system_id: string;
};

export type AuditInfo = {
  id: string;
  createdBy: string;
  createdAt: string;
  lastModifiedBy: string;
  lastModifiedAt: string;
  active: boolean;
};

export enum PriceType {
  RECURRING = "recurring",
  NON_RECURRING = "non-recurring",
}

export enum PeriodUnit {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}
