import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";

const NavbarComponent = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="md:px-5 px-3 py-2 flex justify-between">
          <h6 className="font-bold md:text-5xl text-2xl">G3 Architects</h6>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavbarComponent;
