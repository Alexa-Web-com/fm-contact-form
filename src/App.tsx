import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [generalEnquiry, setGeneralEnquiry] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted!");
  };

  return (
    <main>
      <section>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="elem_container">
            <div className="input_container">
              <label htmlFor="firstName">
                First Name<sup>*</sup>
              </label>
              <input
                className="rounded_border"
                type="text"
                id="firstName"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className="input_container">
              <label htmlFor="lastName">
                Last Name<sup>*</sup>
              </label>
              <input
                className="rounded_border"
                type="text"
                id="lastName"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <div className="input_container">
            <label htmlFor="emailAddress">
              Email Address<sup>*</sup>
            </label>
            <input
              className="rounded_border"
              type="email"
              id="emailAddress"
              name="emailAddress"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <p>
              Query Type<sup>*</sup>
            </p>
          </div>
          <ul className="elem_container">
            <li className="rounded_border">
              <input
                type="radio"
                id="generalEnquiry"
                name="queryType"
                value="General Enquiry"
                checked={generalEnquiry === "General Enquiry"}
                onChange={(e) => setGeneralEnquiry(e.target.value)}
              />
              <label htmlFor="generalEnquiry">General Enquiry</label>
            </li>
            <li className="rounded_border">
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                value="Support Request"
                checked={generalEnquiry === "Support Request"}
                onChange={(e) => setGeneralEnquiry(e.target.value)}
              />
              <label htmlFor="supportRequest">Support Request</label>
            </li>
          </ul>
          <div className="input_container">
            <label htmlFor="message">
              Message<sup>*</sup>
            </label>
            <textarea
              className="rounded_border"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="checkbox_container">
            <input
              className="checkbox_container_input"
              type="checkbox"
              id="consent"
              name="consent"
              onChange={(e) => {
                console.log(e.target.checked);
                setConsent(e.target.checked);
              }}
              checked={consent}
            />
            <label htmlFor="consent">
              I consent to being contacted by the team<sup>*</sup>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default App;
