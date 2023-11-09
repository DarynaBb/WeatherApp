import React from "react";

function Button({ type, text, onClick, disabled }) {

  return (
    <button type={type} onClick={onClick} disabled={disabled} >
      {text}
    </button>
  );
}

export default Button;
