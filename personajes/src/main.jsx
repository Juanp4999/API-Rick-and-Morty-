import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./card.css";
import { FirstComponent } from "./FirstComponent.jsx";
import { ToggleComponent } from "./FirstComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleComponent />
    <FirstComponent />
  </StrictMode>
);
