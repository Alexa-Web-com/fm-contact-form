import { RadioFieldsWrapperType } from "../helpers/types";
import Asterisk from "./Asterisk";

const RadioFieldWrapper = ({ children }: RadioFieldsWrapperType) => {
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
