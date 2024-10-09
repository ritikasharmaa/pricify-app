import * as React from "react";

interface HeadingProps {
  text?: string;
  children?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "main";
  className?: string;
}

const Heading = ({
  text,
  children,
  variant = "h3",
  className = "",
}: HeadingProps) => {
  switch (variant) {
    case "h2":
      return (
        <h2 className={"text-h2 leading-h2 font-black " + className}>
          {text || children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={"text-h3 leading-h3 font-black" + className}>
          {text || children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={"text-h4 leading-h4 font-black " + className}>
          {text || children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={"text-h5 leading-h5 font-black " + className}>
          {text || children}
        </h5>
      );
    case "main":
      return (
        <h1
          className={
            "text-main leading-main font-bold italic " + " " + className
          }
        >
          {text || children}
        </h1>
      );
    default:
      return <></>;
  }
};

export default Heading;
