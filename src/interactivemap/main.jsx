import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Interactivemap from "./interactivemap.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Interactivemap />
  </StrictMode>,
);
