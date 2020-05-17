import React from "react";
import { useForm } from "../hooks/useForm";

const Form = (props) => {
  const { formValues, getInputProps, handleChange } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form__group">
        <label htmlFor="firstName">First name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="firstName"
          type="text"
          {...getInputProps("firstName")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastName">Last name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="lastName"
          type="text"
          {...getInputProps("lastName")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          className="form__input"
          id="email"
          type="text"
          {...getInputProps("email")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          className="form__input"
          id="password"
          type="password"
          {...getInputProps("password")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="isAdmin">Admin</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isAdmin"
          type="checkbox"
          {...getInputProps("isAdmin")}
        />
      </div>
      <button className="btn is-success">Submit</button>
    </form>
  );
};

export default Form;
