import React from "react";

function Greetings(props) {
  const langs = {
    es: "Ola",
    fr: "Bonjour",
    de: "Hallo",
    en: "Hello",
  };

  return (
    <div className="border margin-bottom">
      {langs[props.lang]} {props.children}
    </div>
  );
}

export default Greetings;
