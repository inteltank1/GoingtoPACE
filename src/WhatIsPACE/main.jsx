import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WhatIsPACE from "./WhatIsPACE.jsx";
import "../index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WhatIsPACE />
  </StrictMode>,
);
