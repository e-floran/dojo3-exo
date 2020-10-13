import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewBody from "./PreviewBody.jsx";

function Preview(props) {
  return (
    <div className="preview">
      <PreviewHeader />
      <PreviewBody />
    </div>
  );
}
export default Preview;
