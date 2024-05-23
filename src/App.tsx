import "./App.css";

function App() {
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
                className="rounded"
                type="text"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="input_container">
              <label htmlFor="lastName">
                Last Name<sup>*</sup>
              </label>
              <input
                className="rounded"
                type="text"
                id="lastName"
                name="lastName"
              />
            </div>
          </div>
          <div className="input_container">
            <label htmlFor="emailAddress">
              Email Address<sup>*</sup>
            </label>
            <input
              className="rounded"
              type="email"
              id="emailAddress"
              name="emailAddress"
            />
          </div>
          <div>
            <p>
              Query Type<sup>*</sup>
            </p>
          </div>
          <ul className="elem_container">
            <li className="rounded">
              <input type="radio" id="generalEnquiry" name="queryType" />
              <label htmlFor="generalEnquiry">General Enquiry</label>
            </li>
            <li className="rounded">
              <input type="radio" id="supportRequest" name="queryType" />
              <label htmlFor="supportRequest">Support Request</label>
            </li>
          </ul>
          <div className="input_container">
            <label htmlFor="message">
              Message<sup>*</sup>
            </label>
            <textarea
              className="rounded"
              id="message"
              name="message"
            ></textarea>
          </div>
          <div className="checkbox_container">
            <input
              className="checkbox_container_input"
              type="checkbox"
              id="consent"
              name="consent"
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
