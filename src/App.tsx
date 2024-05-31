import { useState } from "react";
import "./App.css";
import { isEmailValid } from "./helpers/isEmailValid";
import { lengthValidationMsg } from "./helpers/lengthValidationMsg";
import InputField from "./components/InputField";
import CheckboxField from "./components/CheckboxField";
import RadioField from "./components/RadioField";
import TextareaField from "./components/TextareaField";
import FormFieldWrapper from "./components/FormFieldWrapper";

function App() {
  // initial state setup for form fields
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [queryType, setQueryType] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);

  // initial state setup for error messages for form fields
  const [firstNameValidMsg, setFirstNameValidMsg] = useState<string>("");
  const [lastNameValidMsg, setLastNameValidMsg] = useState<string>("");
  const [emailValidMsg, setEmailValidMsg] = useState<string>("");
  const [queryTypeValidMsg, setQueryTypeValidMsg] = useState<string>("");
  const [messageValidMsg, setMessageValidMsg] = useState<string>("");
  const [consentValidMsg, setConsentValidMsg] = useState<string>("");

  // state for checking if the form has been correctly submitted
  const [isSubmittedForm, setIsSubmittedForm] = useState<boolean>(false);

  // checking if all form fields are correctly filled
  const isFormValid = () => {
    let dataValid = true;

    // getting error messages in case of invalid entry, in opposite - getting empty string
    const getFirstNameValidationMsg = lengthValidationMsg(firstName, 2);
    const getLastNameValidationMsg = lengthValidationMsg(lastName, 2);
    const getEmailValidationMsg = isEmailValid(email);
    const getMessageValidationMsg = lengthValidationMsg(message, 6);

    // setting error messages
    setFirstNameValidMsg(getFirstNameValidationMsg);
    setLastNameValidMsg(getLastNameValidationMsg);
    setEmailValidMsg(getEmailValidationMsg);
    setMessageValidMsg(getMessageValidationMsg);

    if (!queryType) {
      setQueryTypeValidMsg("Please choose the query type");
    }

    if (!consent) {
      setConsentValidMsg("Your consent is required!");
    }

    // checking if there are any reasons to set dataValid flag to false
    if (
      !!getFirstNameValidationMsg ||
      !!getLastNameValidationMsg ||
      !!getEmailValidationMsg ||
      !!getMessageValidationMsg ||
      !queryType ||
      !consent
    ) {
      dataValid = false;
    }

    return dataValid;
  };

  // function handling the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    showConfirmation();
    clearForm();
  };

  // function changing the isSubmittedForm state in order to show confirmation of successful form submission
  const showConfirmation = () => {
    setIsSubmittedForm(true);
    setTimeout(() => {
      setIsSubmittedForm(false);
    }, 1200);
  };

  // function clearing the form
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
    setConsent(false);
  };

  return (
    <main>
      {isSubmittedForm ? (
        <div className="confirmation">
          <section>
            <p>Your request has been submitted!</p>
          </section>
        </div>
      ) : (
        <section>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="fields_container">
              <FormFieldWrapper validMsg={firstNameValidMsg}>
                <InputField
                  onChangeFunction={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  type={"text"}
                  id={"firstName"}
                  maxLength={30}
                  setValidMsg={setFirstNameValidMsg}
                >
                  First Name
                </InputField>
              </FormFieldWrapper>
              <FormFieldWrapper validMsg={lastNameValidMsg}>
                <InputField
                  onChangeFunction={(e) => setLastName(e.target.value)}
                  value={lastName}
                  type={"text"}
                  id={"lastName"}
                  maxLength={30}
                  setValidMsg={setLastNameValidMsg}
                >
                  Last Name
                </InputField>
              </FormFieldWrapper>
            </div>
            <FormFieldWrapper validMsg={emailValidMsg}>
              <InputField
                onChangeFunction={(e) => setEmail(e.target.value)}
                value={email}
                type={"email"}
                id={"emailAddress"}
                setValidMsg={setEmailValidMsg}
              >
                Email Address
              </InputField>
            </FormFieldWrapper>
            <FormFieldWrapper validMsg={queryTypeValidMsg}>
              <>
                <div>
                  <p>
                    Query Type<sup>*</sup>
                  </p>
                </div>
                <ul className="fields_container">
                  <RadioField
                    onChangeFunction={(e) => setQueryType(e.target.value)}
                    value={"General Enquiry"}
                    id={"generalEnquiry"}
                    name={"queryType"}
                    checked={queryType === "General Enquiry"}
                    setValidMsg={setQueryTypeValidMsg}
                  >
                    General Enquiry
                  </RadioField>
                  <RadioField
                    onChangeFunction={(e) => setQueryType(e.target.value)}
                    value={"Support Request"}
                    id={"supportRequest"}
                    name={"queryType"}
                    checked={queryType === "Support Request"}
                    setValidMsg={setQueryTypeValidMsg}
                  >
                    Support Request
                  </RadioField>
                </ul>
              </>
            </FormFieldWrapper>
            <FormFieldWrapper validMsg={messageValidMsg}>
              <TextareaField
                onChangeFunction={(e) => setMessage(e.target.value)}
                value={message}
                id={"message"}
                maxLength={255}
                setValidMsg={setMessageValidMsg}
              >
                Message
              </TextareaField>
            </FormFieldWrapper>
            <FormFieldWrapper validMsg={consentValidMsg}>
              <CheckboxField
                onChangeFunction={(e) => setConsent(e.target.checked)}
                id={"consent"}
                checked={consent}
                setValidMsg={setConsentValidMsg}
              >
                I consent to being contacted by the team
              </CheckboxField>
            </FormFieldWrapper>

            {/* old start */}
            {/* <div className="fields_container">
              <div className="input_container">
                <label htmlFor="firstName">
                  First Name<sup>*</sup>
                </label>
                <input
                  className={
                    firstNameValidMsg
                      ? "rounded_border_error"
                      : "rounded_border"
                  }
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  maxLength={30}
                />
                <p className="error_message">{firstNameValidMsg}</p>
              </div>
              <div className="input_container">
                <label htmlFor="lastName">
                  Last Name<sup>*</sup>
                </label>
                <input
                  className={
                    lastNameValidMsg ? "rounded_border_error" : "rounded_border"
                  }
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  maxLength={30}
                />
                <p className="error_message">{lastNameValidMsg}</p>
              </div>
            </div>
            <div className="input_container">
              <label htmlFor="emailAddress">
                Email Address<sup>*</sup>
              </label>
              <input
                className={
                  emailValidMsg ? "rounded_border_error" : "rounded_border"
                }
                type="email"
                id="emailAddress"
                name="emailAddress"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className="error_message">{emailValidMsg}</p>
            </div>
            <div>
              <p>
                Query Type<sup>*</sup>
              </p>
            </div>
            <ul className="fields_container">
              <li
                className={
                  queryTypeValidMsg ? "rounded_border_error" : "rounded_border"
                }
              >
                <input
                  type="radio"
                  id="generalEnquiry"
                  name="queryType"
                  value="General Enquiry"
                  checked={queryType === "General Enquiry"}
                  onChange={(e) => setQueryType(e.target.value)}
                />
                <label htmlFor="generalEnquiry">General Enquiry</label>
              </li>
              <li
                className={
                  queryTypeValidMsg ? "rounded_border_error" : "rounded_border"
                }
              >
                <input
                  type="radio"
                  id="supportRequest"
                  name="queryType"
                  value="Support Request"
                  checked={queryType === "Support Request"}
                  onChange={(e) => setQueryType(e.target.value)}
                />
                <label htmlFor="supportRequest">Support Request</label>
              </li>
            </ul>
            <p className="error_message">{queryTypeValidMsg}</p>
            <div className="input_container">
              <label htmlFor="message">
                Message<sup>*</sup>
              </label>
              <textarea
                className={
                  messageValidMsg ? "rounded_border_error" : "rounded_border"
                }
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={255}
              ></textarea>
              <p className="error_message">{messageValidMsg}</p>
            </div>
            <div
              className={
                consentValidMsg
                  ? "checkbox_container checkbox_container_error"
                  : "checkbox_container"
              }
            >
              <input
                className="checkbox_container_input"
                type="checkbox"
                id="consent"
                name="consent"
                onChange={(e) => setConsent(e.target.checked)}
                checked={consent}
              />
              <label htmlFor="consent">
                I consent to being contacted by the team<sup>*</sup>
              </label>
            </div>
            <p className="error_message">{consentValidMsg}</p> */}
            {/* old end */}

            <button type="submit">Submit</button>
          </form>
        </section>
      )}
    </main>
  );
}

export default App;
