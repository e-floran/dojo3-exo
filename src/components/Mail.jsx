import React from "react";

export default function Mail(props) {
  return (
    <div
      className={
        props.read
          ? "email-item email-item-selected pure-g"
          : "email-item email-item-unread pure-g"
      }
    >
      <div className="pure-u">
        <img className="email-avatar" alt={props.author} src={props.img} />
      </div>
      <div className="pure-u-3-4">
        <h5 className="email-name">{props.author}</h5>
        <h4 className="email-subject">{props.mailTitle}</h4>
        <p className="email-desc">{props.contentPreview}</p>
      </div>
    </div>
  );
}
