import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { DataToSendType } from "./helpers/types";

function App() {
  // state for checking if the form has been correctly submitted
  const [isSubmittedForm, setIsSubmittedForm] = useState<boolean>(false);

  //  state for request body and for submission confirmation details
  const [dataToSend, setDataToSend] = useState<DataToSendType>({});

  return (
    <main>
      {isSubmittedForm ? (
        <div className="confirmation">
          <section>
            <p className="thanks_note">Your request has been submitted!</p>
            <div className="data_confirmation">
              <p className="title">Your data:</p>
              {Object.values(dataToSend).map((value, index) => (
                <p className="details" key={index}>
                  <span className="label">{value.label}:</span> {value.data}
                </p>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <Form
          setIsSubmittedForm={setIsSubmittedForm}
          setDataToSend={setDataToSend}
          key={isSubmittedForm.toString()} // key used to clear the form after submitted status change
        />
      )}
    </main>
  );
}

export default App;
