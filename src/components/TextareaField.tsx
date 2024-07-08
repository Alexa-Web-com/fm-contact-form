import { TextareaFieldType } from "../helpers/types";
import Asterisk from "./Asterisk";

const TextareaField = ({
  onChangeFunction,
  value,
  id,
  maxLength,
  children,
}: TextareaFieldType) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>
        {children}
        <Asterisk />
      </label>
      <textarea
        id={id}
        name={id}
        onChange={onChangeFunction}
        value={value}
        maxLength={maxLength}
      ></textarea>
    </div>
  );
};

export default TextareaField;
