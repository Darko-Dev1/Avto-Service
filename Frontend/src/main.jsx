import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page from './app/dashboard/page.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./app/dashboard/page.jsx";
import PopravkaOne from './Pages/PopravkaOne.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<PopravkaOne />} />
        {/* add more routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
