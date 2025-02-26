import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/layout.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import HomeComponent from "./Components/Ui/HomeComponent/HomeComponent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
