import React from "react";
import { Link } from "react-router-dom";
const FooterLink = ({ value, link }) => {
  return (
    <>
      <li>
        <Link to={link} className="footer-link">
          {value}
        </Link>
      </li>
    </>
  );
};

export default FooterLink;
