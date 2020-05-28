import { useState } from "react";

/* 

// ----- Custom Hook useForm -----

*/

export function useForm(initialValues = {}) {
  const [formValues, setFormValues] = useState(initialValues);

  function handleChange(event) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.type === "file"
        ? event.target.files[0]
        : event.target.value;
    const key = event.target.name;
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  return {
    formValues,
    handleChange,
  };
}
