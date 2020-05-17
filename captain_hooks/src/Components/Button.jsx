import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Button.scss";

const Button = ({
  type = "default",
  className = "",
  isFontAwesome,
  children,
  handleClick,
}) => {
  if (!isFontAwesome) {
    return (
      <button
        className={`Button Button--${type} ${className} `}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
