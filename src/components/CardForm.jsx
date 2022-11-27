import React from "react";
import { useEffect, useState } from "react";
import "../styles/CardForm.css";

export default function CardForm({
  setFormData,
  formData,
  formValidation,
  errors,
  setErrors,
}) {
  const { errorMessages } = errors;
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber")
      ///not working?????
      e.target.value = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    if (name === "mm" || name === "yy")
      e.target.value = value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
    if (name === "mm" && value > 12) e.target.value = "12";
    if (name === "cvc") e.target.value = value.substring(0, 3);

    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleError = (target, message = "Error", type = "add") => {
    // if (type === "add") {
    //   const submitBtn = document.querySelector(".btn-submit");
    //   submitBtn.addEventListener("animationend", () =>
    //     submitBtn.classList.add("shake")
    //   );
    // }
    errorMessages[target] = message;
    document
      .querySelector(`p[name="${target}-error"]`)
      .classList[type == "add" ? "remove" : "add"]("info--hidden");
    document
      .querySelector(`input[name="${target}"]`)
      .classList[type](`input--error`);
  };

  const validate = () => {
    let element;
    let errorElement;
    for (let i in formData) {
      if (!formData[i]) {
        handleError(i, "Can't be blank");
      } else {
        handleError(i, "", "remove");
      }
      console.log(errors);
    }

    if (formData.cardNumber) {
      if (formData.cardNumber.length < 19) {
        handleError("number", "Number is too short");
      } else if (formData.cardNumber.match(/[^0-9\s]/g)) {
        handleError("number", "Wrong format, numbers only");
      } else {
        if (errorMessages.cardNumber) handleError("number", "", "remove");
      }
    }

    if (formData.cvc) {
      if (formData.cvc.length < 3) {
        handleError("cvc", "CVC is too short");
      } else {
        if (errorMessages.cvc) handleError("cvc", "", "remove");
      }
    }
    if (!formData.mm) handleError("mm", "Can`t be blank");
    if (!formData.yy) handleError("yy", "Can`t be blank");

    setErrors({ ...errors });

    if (document.querySelectorAll(".input--error").length === 0)
      formValidation(true);
    else {
      const submitBtn = document.querySelector(".btn-submit");
      submitBtn.classList.add("shake");
      submitBtn.addEventListener("animationend", () =>
        submitBtn.classList.remove("shake")
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <form className="cardForm" onSubmit={handleSubmit}>
      <label className="labelname">
        Cardholder Name
        <input
          type="text"
          placeholder="e.g. Jane Apppleseed"
          name="name"
          onChange={handleInput}
          className="card-input"
        />
      </label>

      <p className="info info--hidden" aria-live="polite" name="name-error">
        {errors.errorMessages.name}
      </p>
      <label className="labelnumber">
        Card Number
        <input
          type="text"
          className="card-input"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          onChange={handleInput}
        />
      </label>
      <p
        className="info info--hidden"
        aria-live="polite"
        name="cardNumber-error"
      >
        {errors.errorMessages.cardNumber}
      </p>

      <div className="cvc">
        <label className="labeldate">
          Exp. Date (MM/YY)
          <div>
            <input
              className="card-input"
              type="text"
              placeholder="MM"
              name="mm"
              onChange={handleInput}
            />
            <input
              className="card-input"
              type="text"
              placeholder="YY"
              name="yy"
              onChange={handleInput}
            />
          </div>
        </label>
        <p className="info info--hidden" aria-live="polite" name="mm-error">
          {errors.errorMessages.mm}
        </p>
        <p className="info info--hidden" aria-live="polite" name="yy-error">
          {errors.errorMessages.yy}
        </p>

        <label className="labelcvc">
          CVC
          <input
            className="card-input"
            type="text"
            placeholder="e.g. 123"
            name="cvc"
            onChange={handleInput}
          />
        </label>
        <p className="info info--hidden" aria-live="polite" name="cvc-error">
          {errorMessages.cvc}
        </p>
      </div>
      <button type="submit" className="btn-submit btn-primary">
        Confirm
      </button>
    </form>
  );
}
