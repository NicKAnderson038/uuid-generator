import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function uuid() {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4()}${s4()}${s4()}${s4()}`;
}

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>Unique Id Generator</h1>
      <br />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter Name"
        type="text"
        name=""
      />
      <button type="submit">Submit</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
