import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  /* </StrictMode> */
);
