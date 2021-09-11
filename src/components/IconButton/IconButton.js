import React from "react";
import Proptypes from "prop-types";
import s from "./IconButton.module.css";

const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button
      type="button"
      className={s.IconButton}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: Proptypes.func,
  children: Proptypes.node,
  "aria-label": Proptypes.string,
};
export default IconButton;
