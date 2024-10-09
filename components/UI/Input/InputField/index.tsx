import React from "react";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputField = React.forwardRef<HTMLInputElement>(
  ({ className, ...rest }: InputFieldProps, ref) => (
    <input
      ref={ref}
      className={
        "rounded-full border border-gray-400 h-[42px] outline-none px-5 py-2.5" +
        " " +
        className
      }
      {...rest}
    />
  )
);

InputField.displayName = "InputField";

export default InputField;
