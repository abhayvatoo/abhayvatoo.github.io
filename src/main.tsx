import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";

// ! after the variable is non null assertion operator
// this will tell typescript complier that the value will never be null
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
