import * as React from "react";

export type SideBarItem = {
  id: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  text: string;
};

interface SideBarTab {
  item: SideBarItem;
  isActive: boolean;
  onClick?: (id: SideBarItem["id"]) => void;
}

const SideBarTab = ({ item, isActive, onClick = () => {} }: SideBarTab) => {
  const extraClassesForPTag = isActive
    ? " font-bold text-warmGray-900 "
    : " font-medium text-warmGray-600";

  return (
    <div
      onClick={() => onClick(item.id)}
      className={`px-4.5 py-4 cursor-pointer flex justify-start items-center ${
        isActive ? " bg-warmGray-300" : "bg-inherit"
      } `}
    >
      <span className="mr-3">{isActive ? item.activeIcon : item.icon}</span>
      <p className={"text-lg leading-5 " + extraClassesForPTag}>{item.text}</p>
    </div>
  );
};

export default SideBarTab;
