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

            <button type="submit">Submit</button>
          </form>
        </section>
      )}
    </main>
  );
}

export default App;
