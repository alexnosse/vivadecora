import React from "react";
import "./button.component.scss";

const Button = ({ onClick, label, image, classNames }) => {
  return (
    <button
      className={`ripple ${classNames}`}
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      {!image ? label : <img src={image} />}
    </button>
  );
};

export default Button;
