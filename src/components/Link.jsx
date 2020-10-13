import React from "react";
import PropTypes from "prop-types";

function Link(props) {
  return <li class={props.link.typeLink}>{dispatchFunc(props.link)}</li>;
}

function labelDisplay(obj) {
  return (
    <a href={obj.href} class="pure-menu-link">
      <span class={"email-label-" + obj.text.toLowerCase()}></span>
      {obj.text}
    </a>
  );
}

function linkDisplay(obj) {
  console.log("obj :>> ", obj);
  const span = obj.count ? <span class="email-count">({obj.count})</span> : "";
  return (
    <a href={obj.href} class="pure-menu-link">
      {obj.text} {span}
    </a>
  );
}

function dispatchFunc(obj) {
  if (obj.type === "title") return obj.text;
  else if (obj.type === "label") return labelDisplay(obj);
  else return linkDisplay(obj);
}

export default Link;
