import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Mails from "./components/Mails";
import EmailContent from "./components/email-content";

function App() {
  return (
    <div id="layout" className="App content pure-g">
      <Menu />
      <Mails />
      <EmailContent />
    </div>
  );
}

export default App;
