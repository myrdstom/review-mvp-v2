import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
  <nav className="nav">
    <Link to="/" className="nav__link">
      Gumroad
    </Link>
  </nav>
);

export default Header;
