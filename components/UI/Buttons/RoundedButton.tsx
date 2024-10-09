import React, { ReactNode } from "react";

export enum ButtonsVariant {
  DEFAULT = "DEFAULT",
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  UNSTYLED = "UNSTYLED",
}

// export type ButtonsVariant = "DEFAULT" | "PRIMARY" | "SECONDARY" | "UNSTYLED";

interface RoundedButtonProps {
  text?: string | ReactNode;
  children?: ReactNode | string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonsVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RoundedButton = ({
  text = "",
  children = "",
  variant = ButtonsVariant.DEFAULT,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...props
}: RoundedButtonProps) => {
  const getClasses = () => {
    if (variant === "UNSTYLED") return "";
    let classes =
      "flex justify-center items-center rounded-full text-base px-6 py-2 border shadow-sm ";

    switch (variant) {
      case "DEFAULT":
        classes +=
          " bg-white text-black border-gray-400 hover:text-white hover:bg-gray-700 ";
        break;
      case "PRIMARY":
        classes += " bg-teal-600 text-white border-teal-700 hover:bg-teal-700 ";
        break;
      case "SECONDARY":
        classes +=
          "bg-amber-700 text-white border-amber-800 hover:bg-amber-800 ";
        break;
    }

    return classes;
  };
  return (
    <button className={getClasses() + className} onClick={onClick} {...props}>
      {leftIcon && <span className="w-4 h-4 mr-2">{leftIcon}</span>}
      {text || children}
      {rightIcon && <span className="w-4 h-4 mr-2">{rightIcon}</span>}
    </button>
  );
};

export default RoundedButton;
