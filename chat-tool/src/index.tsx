import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "react-dom/client"
import "./styles/style.css";
import reportWebVitals from './reportWebVitals';

import App from "./App";

const rootElm = document.getElementById("root")

if (rootElm) {
  createRoot(rootElm).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
reportWebVitals(console.log);