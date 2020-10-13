import React from "react";
import Mail from "./Mail";

export default function Mails() {
  const mails = [
    {
      author: "TILO MITRA",
      mailTitle: "Hello from Toronto",
      contentPreview:
        "Hey, I just wanted to check in with you from Toronto. I got here earlier today.",
      read: false,
      img: "https://purecss.io/img/common/tilo-avatar.png",
    },
    {
      author: "ERIC FERRAIUOLO",
      mailTitle: "Re: Pull Requests",
      contentPreview:
        "Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.",
      read: true,
      img: "https://purecss.io/img/common/ericf-avatar.png",
    },
    {
      author: "YUI LIBRARY",
      mailTitle: "You have 5 bugs assigned to you",
      contentPreview:
        "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.",
      read: true,
      img: "https://purecss.io/img/common/yui-avatar.png",
    },
    {
      author: "REID BURKE",
      mailTitle: "Re: Design Language",
      contentPreview:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      read: false,
      img: "https://purecss.io/img/common/reid-avatar.png",
    },
    {
      author: "ANDREW WOOLDRIDGE",
      mailTitle: "YUI Blog Updates?",
      contentPreview:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      read: false,
      img: "https://purecss.io/img/common/andrew-avatar.png",
    },
    {
      author: "TILO MITRA",
      mailTitle: "Hello from Toronto",
      contentPreview:
        "Hey, I just wanted to check in with you from Toronto. I got here earlier today.",
      read: false,
      img: "https://purecss.io/img/common/tilo-avatar.png",
    },
    {
      author: "ERIC FERRAIUOLO",
      mailTitle: "Re: Pull Requests",
      contentPreview:
        "Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.",
      read: true,
      img: "https://purecss.io/img/common/ericf-avatar.png",
    },
    {
      author: "YUI LIBRARY",
      mailTitle: "You have 5 bugs assigned to you",
      contentPreview:
        "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.",
      read: true,
      img: "https://purecss.io/img/common/yui-avatar.png",
    },
    {
      author: "REID BURKE",
      mailTitle: "Re: Design Language",
      contentPreview:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      read: false,
      img: "https://purecss.io/img/common/reid-avatar.png",
    },
    {
      author: "ANDREW WOOLDRIDGE",
      mailTitle: "YUI Blog Updates?",
      contentPreview:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      read: false,
      img: "https://purecss.io/img/common/andrew-avatar.png",
    },
  ];
  return (
    <div id="list" className="pure-u-1">
      {mails.map((mail) => (
        <Mail
          author={mail.author}
          mailTitle={mail.mailTitle}
          contentPreview={mail.contentPreview}
          read={mail.read}
          img={mail.img}
        />
      ))}
    </div>
  );
}
