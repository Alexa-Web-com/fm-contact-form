import { useState, useEffect } from "react";
import "./App.css";

const emailIsValid = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [queryType, setQueryType] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);

  const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(true);
  const [isLastNameValid, setIsLastNameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isQueryTypeValid, setIsQueryTypeValid] = useState<boolean>(true);
  const [isMessageValid, setIsMessageValid] = useState<boolean>(true);
  const [isConsentValid, setIsConsentValid] = useState<boolean>(true);

  const [isSubmittedForm, setIsSubmittedForm] = useState<boolean>(false);

  useEffect(() => {
    setIsFirstNameValid(true);
  }, [firstName]);
  useEffect(() => {
    setIsLastNameValid(true);
  }, [lastName]);
  useEffect(() => {
    if (emailIsValid(email)) {
      setIsEmailValid(true);
    }
  }, [email]);
  useEffect(() => {
    setIsQueryTypeValid(true);
  }, [queryType]);
  useEffect(() => {
    if (message.length > 5) {
      setIsMessageValid(true);
    }
  }, [message]);
  useEffect(() => {
    setIsConsentValid(true);
  }, [consent]);

  const isFormValid = () => {
    let dataValid = true;

    if (firstName.length < 3) {
      dataValid = false;
      setIsFirstNameValid(false);
    }

    if (lastName.length < 3) {
      dataValid = false;
      setIsLastNameValid(false);
    }

    if (!emailIsValid(email)) {
      dataValid = false;
      setIsEmailValid(false);
    }

    if (queryType === "") {
      dataValid = false;
      setIsQueryTypeValid(false);
    }

    if (message.length < 6) {
      dataValid = false;
      setIsMessageValid(false);
    }

    if (!consent) {
      dataValid = false;
      setIsConsentValid(false);
    }

    return dataValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    setIsSubmittedForm(true);
    setTimeout(() => {
      setIsSubmittedForm(false);
    }, 1000);

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
        <div className="confirmation_container">
          <section>
            <p className="confirmation">Your request has been submitted!</p>
          </section>
        </div>
      ) : (
        <section>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="elem_container">
              <div className="input_container">
                <label htmlFor="firstName">
                  First Name<sup>*</sup>
                </label>
                <input
                  className={
                    isFirstNameValid ? "rounded_border" : "rounded_border_error"
                  }
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <p className="error_message">
                  {isFirstNameValid ? "" : "This field is required"}
                </p>
              </div>
              <div className="input_container">
                <label htmlFor="lastName">
                  Last Name<sup>*</sup>
                </label>
                <input
                  className={
                    isLastNameValid ? "rounded_border" : "rounded_border_error"
                  }
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                <p className="error_message">
                  {isLastNameValid ? "" : "This field is required"}
                </p>
              </div>
            </div>
            <div className="input_container">
              <label htmlFor="emailAddress">
                Email Address<sup>*</sup>
              </label>
              <input
                className={
                  isEmailValid ? "rounded_border" : "rounded_border_error"
                }
                type="email"
                id="emailAddress"
                name="emailAddress"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className="error_message">
                {isEmailValid ? "" : "Please enter a valid email address"}
              </p>
            </div>
            <div>
              <p>
                Query Type<sup>*</sup>
              </p>
            </div>
            <ul className="elem_container">
              <li
                className={
                  isQueryTypeValid ? "rounded_border" : "rounded_border_error"
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
                  isQueryTypeValid ? "rounded_border" : "rounded_border_error"
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
            <p className="error_message">
              {isQueryTypeValid ? "" : "Please choose the query type"}
            </p>
            <div className="input_container">
              <label htmlFor="message">
                Message<sup>*</sup>
              </label>
              <textarea
                className={
                  isMessageValid ? "rounded_border" : "rounded_border_error"
                }
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className="error_message">
                {isMessageValid ? "" : "You need to enter 6 characters minimum"}
              </p>
            </div>
            <div
              className={
                isConsentValid
                  ? "checkbox_container"
                  : "checkbox_container checkbox_container_error"
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
            <p className="error_message">
              {isConsentValid ? "" : "Your consent is required!"}
            </p>
            <button type="submit">Submit</button>
          </form>
        </section>
      )}
    </main>
  );
}

export default App;
