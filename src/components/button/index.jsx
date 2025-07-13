import React from "react";
import "./index.css";

function Button({ onclick, title }) {
  return (
    <button onClick={onclick} className="button">
      {title}
    </button>
  );
}

export default Button;
