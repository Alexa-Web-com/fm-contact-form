import { useEffect } from "react";
import { CheckboxFieldType } from "../helpers/types";
import Asterisk from "./Asterisk";

const CheckboxField = ({
  onChangeFunction,
  id,
  checked,
  children,
  setValidMsg,
}: CheckboxFieldType) => {
  // hook clearing error message state when new data is entered or corrected in form field
  useEffect(() => {
    setValidMsg("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
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
