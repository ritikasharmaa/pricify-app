import React from "react";
import { flushSync } from "react-dom";
import { Price } from "../../../../types";
import InputField from "../../../UI/Input/InputField";

export enum PriceFieldStatus {
  CAN_EDIT = "CAN_EDIT",
  IS_EDITING = "IS_EDITING",
  EDITED = "EDITED",
  DEFAULT = "DEFAULT",
}

interface EditablePriceFieldProps {
  // status?: PriceFieldStatus;
  isEditable?: boolean;
  price?: Price;
}

const EditablePriceField = ({
  // status = PriceFieldStatus.DEFAULT,
  isEditable = false,
  price,
}: EditablePriceFieldProps) => {
  const [status, setStatus] = React.useState<PriceFieldStatus>(
    isEditable ? PriceFieldStatus.CAN_EDIT : PriceFieldStatus.DEFAULT
  );
  const inputRef = React.useRef<HTMLInputElement>();

  const getWrapperStyles = () => {
    if (status === PriceFieldStatus.EDITED) {
      return "bg-teal-100 font-bold ";
    }
    if (status === PriceFieldStatus.IS_EDITING) {
      return "bg-teal-200";
    }
    return "";
  };

  const priceInt = price?.amount?.split?.(".")[0];
  const priceDecimal = price?.amount.split(".")?.[1] || "00";

  return (
    <td className={getWrapperStyles()}>
      <div>
        {!price ? (
          "-"
        ) : (
          <>
            {status === PriceFieldStatus.IS_EDITING ? (
              <InputField
                type="number"
                className="w-28 text-center"
                ref={inputRef}
                defaultValue={parseFloat(price?.amount || "0").toFixed(2)}
                onBlur={() => {
                  // once UI will get fixed we can remove this setTimeout
                  setTimeout(
                    () => setStatus(() => PriceFieldStatus.EDITED),
                    100
                  );
                }}
              />
            ) : (
              <p className="text-lg font-inherit whitespace-nowrap ">
                <>
                  {priceInt}
                  <sup>{priceDecimal}</sup>
                  {status === PriceFieldStatus.CAN_EDIT && (
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        flushSync(() => {
                          setStatus(() => PriceFieldStatus.IS_EDITING);
                        });
                        inputRef.current?.focus();
                      }}
                    >
                      {" "}
                      &nbsp;✏
                    </span>
                  )}
                </>
              </p>
            )}
          </>
        )}
      </div>
    </td>
  );
};

export default EditablePriceField;
