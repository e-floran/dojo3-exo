import React from "react";
import PropTypes from "prop-types";

function EmailContentTitle(props) {
  return (
    <div className="pure-u-1-2">
      <h2 className="email-content-title">{props.mailTitle}</h2>
      <p className="email-content-subtitle">
        From {props.author} at {props.date}
      </p>
    </div>
  );
}
EmailContentTitle.propTypes = {
  mailTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default EmailContentTitle;
