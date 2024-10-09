import React from "react";

interface MessageBarProps {
  leftIcon?: React.ReactNode;
  rightActionComp?: React.ReactNode;
  title?: string;
  description: string;
  variant?: "Standard" | "Error" | "Alert";
  className?: string;
}

const MessageBar = ({
  leftIcon,
  title,
  description,
  rightActionComp,
  variant = "Standard",
  className = "",
}: MessageBarProps) => {
  let wrapperClasses =
    "flex gap-2 items-center px-3 py-2.5 border rounded shadow	";

  switch (variant) {
    case "Standard":
      wrapperClasses += " bg-teal-200 border-teal-300";
      break;
    case "Error":
      wrapperClasses += " bg-red-200 border-red-300";
      break;
    case "Alert":
      wrapperClasses += " bg-yellow-200 border-yellow-300";
      break;
  }

  return (
    <div className={wrapperClasses + " " + className}>
      {leftIcon && <div>{leftIcon}</div>}
      <div className="flex items-center text-sm grow-0 pr-2">
        {title && <h3 className="font-bold">{title}: &nbsp; </h3>}
        <p className="font-medium text-sm">{description}</p>
      </div>
      {rightActionComp && (
        <div className="grow whitespace-nowrap">{rightActionComp}</div>
      )}
    </div>
  );
};

export default MessageBar;
