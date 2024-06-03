import { RadioFieldType } from "../helpers/types";

const RadioField = ({
  onChangeFunction,
  value,
  id,
  name,
  checked,
  children,
}: RadioFieldType) => {
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
