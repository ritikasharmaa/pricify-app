import { useRouter } from "next/router";
import * as React from "react";
import {
  AnalyticsIcon,
  ExperimentIcon,
  GetStartedIcon,
  PricingIcon,
  SettingsIcon,
} from "../../assets/icons";
import SideBarTab, { SideBarItem } from "./SideBarTab";

const ACTIVE_COLOR = "#1C1917";

const SideBarsData: SideBarItem[] = [
  {
    id: "0",
    text: "Get started",
    icon: <GetStartedIcon />,
    activeIcon: <GetStartedIcon fill={ACTIVE_COLOR} />,
  },
  {
    id: "1",
    text: "Pricing",
    icon: <PricingIcon />,
    activeIcon: <PricingIcon fill={ACTIVE_COLOR} />,
  },
  {
    id: "2",
    text: "Experiments",
    icon: <ExperimentIcon />,
    activeIcon: <ExperimentIcon fill={ACTIVE_COLOR} />,
  },
  {
    id: "3",
    text: "Analytics",
    icon: <AnalyticsIcon />,
    activeIcon: <AnalyticsIcon fill={ACTIVE_COLOR} />,
  },
  {
    id: "4",
    text: "Settings",
    icon: <SettingsIcon />,
    activeIcon: <SettingsIcon fill={ACTIVE_COLOR} />,
  },
];

const SideBarTabs = () => {
  const { pathname } = useRouter();
  const [activeTabIndex, setActiveTabIndex] = React.useState<number | null>();

  React.useEffect(() => {
    switch (pathname) {
      case "/manage-pricing":
        setActiveTabIndex(1);
        break;
    }
  }, [pathname]);

  const handleActivetabClick = (id: SideBarItem["id"]) => {
    const newActiveIndex = SideBarsData.findIndex((item) => item.id === id);
    setActiveTabIndex(() => newActiveIndex);
  };

  return (
    <div>
      {SideBarsData.map((item, index) => (
        <SideBarTab
          onClick={handleActivetabClick}
          isActive={activeTabIndex === index}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default SideBarTabs;
