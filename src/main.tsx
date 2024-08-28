import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@cristianps1988/ds-template/src/styles/reset.css";
import "@cristianps1988/ds-template/src/styles/tokens.css";
import "@cristianps1988/ds-template/src/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
