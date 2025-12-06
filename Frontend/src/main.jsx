import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import "./index.css";

import App from "./App.jsx";
import PopravkaOne from "./Pages/PopravkaOne.jsx";
import { ThemeProvider } from "./components/theme-provider";
import PopravkiMain from "./Pages/PopravkiMain";
import PopravkaThree from "./Pages/PopravkaThree";
import Info from "./Pages/Info";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/popravki",
    element: <PopravkiMain />,
  },
  {
    path: "/popravki/1",
    element: <PopravkaOne />,
  },
  {
    path: "/popravki/2",
    element: <PopravkaThree />, 
  },
  {
    path: "/info",
    element: <Info />, 
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);