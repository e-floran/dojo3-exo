import React from "react";
import "./Menu.css";
import Button from "./Button";
import Links from "./Links";

function Menu(props) {
  const arrayLinks = [
    {
      type: "link",
      typeLink: "pure-menu-item",
      href: "#",
      count: 2,
      text: "Inbox",
    },
    {
      type: "link",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Important",
    },
    {
      type: "link",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Sent",
    },
    {
      type: "link",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Drafts",
    },
    {
      type: "link",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Trash",
    },
    {
      type: "title",
      typeLink: "pure-menu-heading",
      text: "Labels",
    },
    {
      type: "label",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Personal",
    },
    {
      type: "label",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Work",
    },
    {
      type: "label",
      typeLink: "pure-menu-item",
      href: "#",
      text: "Travel",
    },
  ];

  return (
    <div id="nav" className="pure-u-1">
      <div className="nav-inner">
        <Button nameBtn="Compose" typeClassBtn="primary-button" />
        <div className="pure-menu">
          <Links arrayLinks={arrayLinks} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
