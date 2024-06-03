interface IFormFieldWrapper {
  children: JSX.Element;
  validMsg: string;
}

const FormFieldWrapper = ({ children, validMsg }: IFormFieldWrapper) => {
  const borderClass = validMsg ? "border_error" : "border";

  return (
    <div className={borderClass}>
      {children}
      <p className="error_message">{validMsg}</p>
    </div>
  );
};

export default FormFieldWrapper;
