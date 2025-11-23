import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import PopravkaOne from "./Pages/PopravkaOne.jsx";
import { ThemeProvider } from "./components/theme-provider";
import PopravkiMain from "./Pages/PopravkiMain";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/popravki" element={<PopravkiMain />} />
          <Route path="/popravki/1" element={<PopravkaOne />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
