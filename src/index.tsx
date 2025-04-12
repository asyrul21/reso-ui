import React from "react";
// tslint:disable-next-line:no-submodule-imports
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ResoUiProvider } from "./library/providers";

// tslint:disable-next-line:no-console
console.log("RESO UI running on React version:", React.version);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ResoUiProvider>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </ResoUiProvider>
  </BrowserRouter>
);
