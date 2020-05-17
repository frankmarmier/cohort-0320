import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ sign, handleClick, className, isFontAwesome, children }) => {
  if (!isFontAwesome) {
    return (
      <button className={"btn " + className} onClick={handleClick}>
        {children}
      </button>
    );
  }

  return (
    <button onClick={handleClick} className={className}>
      <FontAwesomeIcon icon={sign} />
    </button>
  );
};

export default Button;
