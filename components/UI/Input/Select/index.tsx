import React from "react";
import RSelect from "react-select";

const colors = require("tailwindcss/colors");

interface SelectProps<T> {
  options?: T[];
  value?: T;
  onChange?: (selectedValue: T) => void;
  width?: number;
}

type Option = {
  label: string;
  value: string;
};

// This Component is not fully Customisable yet
const Select = ({
  options = [],
  value,
  onChange = () => {},
  width = 280,
}: SelectProps<Option>) => {
  return (
    <RSelect
      options={options}
      onChange={(e) => onChange(e as Option)}
      value={value}
      isSearchable={false}
      styles={{
        control: (styles) => ({
          ...styles,
          width: width,
          padding: "3px 1.25rem",
          border: `1px solid ${colors.gray[400]}`,
          boxShadow: "none",
          borderRadius: "999px",
          color: colors.gray[800],
          ":focus": {
            border: `1px solid ${colors.gray[400]}`,
            outline: "none",
          },
          ":hover": {
            border: `1px solid ${colors.gray[400]}`,
          },
        }),
        singleValue: (styles) => ({
          ...styles,
          color: colors.gray[800],
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default Select;
