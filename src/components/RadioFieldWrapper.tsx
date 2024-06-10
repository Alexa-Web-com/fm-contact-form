import { useEffect } from "react";
import { RadioFieldsWrapperType } from "../helpers/types";
import Asterisk from "./Asterisk";

const RadioFieldWrapper = ({
  children,
  value,
  setValidMsg,
}: RadioFieldsWrapperType) => {
  // hook clearing error message state when new data is entered or corrected in form field
  useEffect(() => {
    setValidMsg("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <>
      <p>
        Query Type
        <Asterisk />
      </p>
      <ul className="fields_container">{children}</ul>
    </>
  );
};

export default RadioFieldWrapper;
