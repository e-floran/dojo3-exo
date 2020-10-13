import React from "react";
import PropTypes from "prop-types";

function PreviewBody(props) {
  return <div className="preview.content">{props.content}</div>;
}
PreviewBody.propTypes = {
  content: PropTypes.string.isRequired,
};
export default PreviewBody;
