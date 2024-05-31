// function checking if email address is entered and if it is valid
export const isEmailValid = (email: string): string => {
  if (email.length < 1) {
    return "This field is required";
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};
