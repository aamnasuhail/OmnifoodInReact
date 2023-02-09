import React from "react";
import { Link } from "react-router-dom";
const NavLink = ({ value, link }) => {
  return (
    <>
      <li>
        <Link to={link} className="main-nav-link">
          {value}
        </Link>
      </li>
    </>
  );
};

export default NavLink;
