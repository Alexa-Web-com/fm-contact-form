import "./App.css";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted!");
  };

  return (
    <main>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="firstName">
              First Name<span>*</span>
            </label>
            <input type="text" id="firstName" name="firstName"></input>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name<span>*</span>
            </label>
            <input type="text" id="lastName" name="lastName"></input>
          </div>
        </div>
        <div>
          <label htmlFor="emailAddress">
            Email Address<span>*</span>
          </label>
          <input type="email" id="emailAddress" name="emailAddress"></input>
        </div>
        <div>
          Query Type<span>*</span>
        </div>
        <div>
          <div>
            <input type="radio" id="generalEnquiry" name="queryType"></input>
            <label htmlFor="generalEnquiry">General Enquiry</label>
          </div>
          <div>
            <input type="radio" id="supportRequest" name="queryType"></input>
            <label htmlFor="supportRequest">Support Request</label>
          </div>
        </div>
        <div>
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea id="message" name="message" rows={3}></textarea>
        </div>
        <input type="checkbox" id="consent" name="consent"></input>
        <label htmlFor="consent">
          I consent to being contacted by the team<span>*</span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
