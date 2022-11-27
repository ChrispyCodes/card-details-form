import React from "react";
import iconComplete from "../assets/icon-complete.svg";
import "../styles/CardSubmitted.css";

export default function CardSubmittedForm({
  setFormData,
  formValidation,
  setErrors,
}) {
  const resetForm = () => {
    setFormData({
      name: null,
      cardNumber: null,
      mm: null,
      yy: null,
      cvc: null,
    });
    setErrors({
      errorMessages: {
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
    <div className="cardSubmitted">
      <img src={iconComplete} alt="complete" />
      <p>Thank You!</p>
      <p>We've added your card details</p>
      <button className="btn-primary" onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}
