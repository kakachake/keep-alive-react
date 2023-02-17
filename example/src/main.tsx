import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { KeepaliveScope } from "../../src/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <KeepaliveScope>
      <App />
    </KeepaliveScope>
  </BrowserRouter>
  // </React.StrictMode>
);
