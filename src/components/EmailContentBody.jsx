import React from "react";
import PropTypes from "prop-types";

function EmailContentBody(props) {
  return <div className="email-content-body">{props.content}</div>;
}
EmailContentBody.propTypes = {
  content: PropTypes.string.isRequired,
};
export default EmailContentBody;
