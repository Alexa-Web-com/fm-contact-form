// function checking if the text is entered and if it's length is appropriate
export const lengthValidationMsg = (text: string, qty: number): string => {
  if (text.length < 1) {
    return "This field is required";
  }
  if (text.length < qty) {
    return `You need to enter ${qty} characters minimum`;
  }
  return "";
};
