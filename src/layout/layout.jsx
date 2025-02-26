import React from "react";
import { Outlet } from "react-router";
import NavbarComponent from "../Components/Shared/Navbar/NavbarComponent";

const Layout = () => {
  return <div>
    <NavbarComponent />
    <Outlet />
  </div>;
};

export default Layout;
