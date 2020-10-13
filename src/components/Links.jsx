import React from "react";
import Proptypes from "prop-types";
import Link from "./Link";

function Links(props) {
  const link1 = props.arrayLinks[0];
  const link2 = props.arrayLinks[1];
  const link3 = props.arrayLinks[2];
  const link4 = props.arrayLinks[3];

  return (
    <ul class="pure-menu-list">
      {props.arrayLinks.map((link) => (
        <Link link={link} />
      ))}
    </ul>
  );
}

export default Links;
