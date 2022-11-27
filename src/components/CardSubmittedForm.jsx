import React from "react";
import iconComplete from "../assets/icon-complete.svg";

export default function CardSubmittedForm({ setFormData, formValidation }) {
  const resetForm = () => {
    setFormData({
      name: null,
      number: null,
      mm: null,
      yy: null,
      cvc: null,
      errorMessage: {
        name: "",
        cardNumber: "",
        mm: "",
        yy: "",
        cvc: "",
      },
    });
    formValidation(false);
  };

  return (
    <div>
      <img src={iconComplete} alt="complete" />
      <p>Thank You!</p>
      <p>We've added your card details</p>
      <button className="btn-primary" onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}
