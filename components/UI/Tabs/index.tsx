import React from "react";
import RoundedButton, { ButtonsVariant } from "../Buttons/RoundedButton";

export type Tab = {
  label: string;
  value: string;
};

interface TabsProps<T> {
  tabs?: T[];
  defaultSelectedTab?: T;
  selectedTab?: T;
  onChange?: (tab: T) => void;
  variant?: "capsule" | "default";
  selectedFieldClassName?: string;
}

const Tabs = ({
  tabs = [],
  defaultSelectedTab,
  selectedTab,
  onChange = () => {},
  variant = "default",
  selectedFieldClassName,
}: TabsProps<Tab>) => {
  const [activeTab, setActivetab] = React.useState<Tab>(
    defaultSelectedTab || selectedTab || tabs[0]
  );

  React.useEffect(() => {
    if (selectedTab) {
      setActivetab(selectedTab);
    }
  }, [selectedTab]);

  const getBorderStyle = () => {
    switch (variant) {
      case "default":
        return "rounded";
      case "capsule":
        return "rounded-full";
    }
  };

  return (
    <div className={"flex overflow-hidden" + " " + getBorderStyle()}>
      {tabs.map((tab) => {
        const isSelected = activeTab.value === tab.value;
        return (
          <RoundedButton
            className={`py-2 px-6 ${
              isSelected ? "bg-teal-300" : "bg-warmGray-300"
            }`}
            key={tab.label}
            variant={ButtonsVariant.UNSTYLED}
            text={tab.label}
            onClick={() => onChange(tab)}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
