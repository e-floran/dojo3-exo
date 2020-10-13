import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderButtons from "./HeaderButtons";
import PropTypes from "prop-types";
function PreviewHeader(props) {
  return (
    <div className="previewHeader">
      <React.StrictMode>
        <HeaderTitle />
        <HeaderButtons />
      </React.StrictMode>
    </div>
  );
}
export default PreviewHeader;
