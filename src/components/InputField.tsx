import { useEffect } from "react";
import "../App.css";
import { InputFieldType } from "../helpers/types";

const InputField = ({
  onChangeFunction,
  value,
  type,
  id,
  maxLength,
  children,
  setValidMsg,
}: InputFieldType) => {
  // hook clearing error message state when new data is entered or corrected in form field
  useEffect(() => {
    setValidMsg("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div className="input_container">
      <label htmlFor={id}>
        {children}
        <sup>*</sup>
      </label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChangeFunction}
        value={value}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputField;
