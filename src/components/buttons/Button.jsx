import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, handleClick, bg }) {
  return (
    <div
      onClick={handleClick}
      className={styles.button}
      style={{ backgroundColor: bg }}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  bg: PropTypes.string,
};
export default Button;
