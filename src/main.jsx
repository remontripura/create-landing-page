import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/layout.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import HomeComponent from "./Components/Ui/HomeComponent/HomeComponent.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
