import React, { useState } from "react";
import ReactDOM from "react-dom";
import Map1 from "./map.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Google Map</h1>
      <Map1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Map1 />, rootElement);
