interface IFormFieldWrapper {
  children: JSX.Element;
  validMsg: string;
}

const FormFieldWrapper = ({ children, validMsg }: IFormFieldWrapper) => {
  const borderClass = validMsg ? "border_error" : "border";

  return (
    <div className="form_field_container">
      <div className={borderClass}>{children}</div>
      <p className="error_message">{validMsg}</p>
    </div>
  );
};

export default FormFieldWrapper;
