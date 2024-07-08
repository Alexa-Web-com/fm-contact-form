import "../App.css";
import { InputFieldType } from "../helpers/types";
import Asterisk from "./Asterisk";

const InputField = ({
  onChangeFunction,
  value,
  type,
  id,
  maxLength,
  children,
}: InputFieldType) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>
        {children}
        <Asterisk />
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
