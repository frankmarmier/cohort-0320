import React from "react";

function GuardOperator({ value }) {
  return value >= 10 && <div>I am true</div>;
}

export default GuardOperator;
