import React from "react";
import Proptypes from "prop-types";

function Button(props) {
  return (
    <button class={`${props.typeClassBtn} pure-button`}>{props.nameBtn}</button>
  );
}

Button.propTypes = {
  nameBtn: Proptypes.string.isRequired,
  typeClassBtn: Proptypes.string.isRequired,
};

Button.defaultProps = {
  typeClassBtn: "primary-button",
};

export default Button;
