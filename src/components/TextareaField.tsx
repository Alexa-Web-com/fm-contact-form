import { useEffect } from "react";
import { TextareaFieldType } from "../helpers/types";

const TextareaField = ({
  onChangeFunction,
  value,
  id,
  maxLength,
  children,
  setValidMsg,
}: TextareaFieldType) => {
  // hook clearing error message state when new data is entered or corrected in form field
  useEffect(() => {
    if (value.length > 5) {
      setValidMsg("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div className="input_container">
      <label htmlFor={id}>
        {children}
        <sup>*</sup>
      </label>
      <textarea
        id={id}
        name={id}
        onChange={onChangeFunction}
        value={value}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextareaField;
