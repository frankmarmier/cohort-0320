import React from "react";

function TernaryOperator({ text }) {
  return text.length >= 10 ? (
    <div>I am a long text</div>
  ) : (
    <div>I am a short text</div>
  );
}

export default TernaryOperator;
