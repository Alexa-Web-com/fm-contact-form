// function checking if the text is entered and if it's length is appropriate
export const lengthValidationMsg = (
  text: string,
  minLength: number
): string => {
  if (text.length < 1) {
    return "This field is required";
  }
  if (text.length < minLength) {
    return `You need to enter ${minLength} characters minimum`;
  }
  return "";
};
