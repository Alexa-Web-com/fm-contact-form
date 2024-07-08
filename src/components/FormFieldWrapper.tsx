import { useEffect } from "react";
import { FormFieldWrapperType } from "../helpers/types";

const FormFieldWrapper = ({
  children,
  validMsg,
  clearValidMsgInitiator,
  setValidMsg,
}: FormFieldWrapperType) => {
  // hook clearing error message state when new data is entered or corrected in form field
  useEffect(() => {
    setValidMsg("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearValidMsgInitiator]);

  const borderClass = validMsg ? "border_error" : "border";

  return (
    <div className={borderClass}>
      {children}
      <p className="error_message">{validMsg}</p>
    </div>
  );
};

export default FormFieldWrapper;
