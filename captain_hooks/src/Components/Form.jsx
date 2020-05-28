import React from "react";
import { useForm } from "hooks/useForm";
import Button from "Components/Button";
import "styles/Form.scss";

const Form = (props) => {
  const { formValues, handleChange } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form
      autoComplete="off"
      className="Form"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <h1 className="Form__title">Subscribe</h1>
      <div className="Form__group">
        <label className="Form__label" htmlFor="firstName">
          First name
        </label>
        <input
          className="Form__input"
          id="firstName"
          type="text"
          name="firstName"
        />
      </div>
      <div className="Form__group">
        <label className="Form__label" htmlFor="lastName">
          Last name
        </label>
        <input
          className="Form__input"
          id="lastName"
          type="text"
          name="lastName"
        />
      </div>
      <div className="Form__group">
        <label className="Form__label" htmlFor="email">
          Email
        </label>
        <input className="Form__input" id="email" type="email" name="email" />
      </div>
      <div className="Form__group">
        <label className="Form__label" htmlFor="password">
          Password
        </label>
        <input
          className="Form__input"
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div className="Form__group">
        <label className="Form__label" htmlFor="isAdmin">
          Admin
        </label>
        <input className="Form__input" id="isAdmin" type="checkbox" />
      </div>
      <Button type="success">Submit</Button>
    </form>
  );
};

export default Form;
