import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import CardSubmitted from "./components/CardSubmittedForm";
import "./styles/App.css";

function App() {
  const [formData, setFormData] = useState({
    name: null,
    cardNumber: null,
    mm: null,
    yy: null,
    cvc: null,
  });
  const [errors, setErrors] = useState({
    errorMessages: {
      name: "",
      cardNumber: "",
      mm: "",
      yy: "",
      cvc: "",
    },
  });
  const [validate, setValidate] = useState(false);

  const formValidation = (validate) =>
    setTimeout(() => {
      setValidate(validate);
      document.querySelector(".cardOverflow > div").style.transform =
        "translate(0)";
    }, 500);

  return (
    <>
      <Card formData={formData} />
      <main className="cardOverflow">
        <div>
          {validate ? (
            <CardSubmitted
              setFormData={setFormData}
              formValidation={formValidation}
              setErrors={setErrors}
            />
          ) : (
            <CardForm
              setFormData={setFormData}
              formData={formData}
              formValidation={formValidation}
              errors={errors}
              setErrors={setErrors}
            />
          )}
        </div>
      </main>

      <footer className="attribution">
        <p>
          Made by{" "}
          <a
            href="https://github.com/chrispycodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
