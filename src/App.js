import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Mails from "./components/Mails";
import Preview from "./components/Preview";

function App() {
  return (
    <div id="layout" className="App content pure-g">
      <Menu />
      <Mails />
      <Preview />
    </div>
  );
}

export default App;
