import { useEffect } from "react";
import { RadioFieldType } from "../helpers/types";

const RadioField = ({
  onChangeFunction,
  value,
  id,
  name,
  checked,
  children,
  setValidMsg,
}: RadioFieldType) => {
  // hook clearing error message state when new data is entered or corrected in form field
  useEffect(() => {
    setValidMsg("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <>
      <li>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChangeFunction}
          checked={checked}
        />
        <label htmlFor={id}>{children}</label>
      </li>
    </>
  );
};

export default RadioField;
