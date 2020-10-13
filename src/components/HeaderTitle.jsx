import React from "react";
import PropTypes from "prop-types";

function HeaderTitle(props) {
  return (
    <div className="titleContainer">
      <h2 className="mailTitle">{props.mailTitle}</h2>
      <p className="mailInfos">
        From {props.author} at {props.date}
      </p>
    </div>
  );
}
HeaderTitle.propTypes = {
  mailTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default HeaderTitle;
