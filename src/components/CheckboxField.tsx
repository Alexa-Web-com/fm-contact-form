import { CheckboxFieldType } from "../helpers/types";
import Asterisk from "./Asterisk";

const CheckboxField = ({
  onChangeFunction,
  id,
  checked,
  children,
}: CheckboxFieldType) => {
  return (
    <>
      <div className="checkbox_container">
        <input
          className="checkbox_container_input"
          type="checkbox"
          id={id}
          name={id}
          onChange={onChangeFunction}
          checked={checked}
        />
        <label htmlFor={id}>
          {children}
          <Asterisk />
        </label>
      </div>
    </>
  );
};

export default CheckboxField;
