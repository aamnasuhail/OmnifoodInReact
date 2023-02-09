import React from "react";
import FooterLink from "./FooterLink";

const FooterNav = () => {
  const footerNavData = [
    {
      link: "/",
      value: "Home",
    },
    {
      link: "/about",
      value: "About",
    },
    {
      link: "/product",
      value: "Product",
    },
    {
      link: "/contact",
      value: "Contact",
    },
  ];
  return (
    <>
      <nav className="nav-col">
        <ul className="footer-nav">
          {footerNavData.map((item, idx) => {
            return <FooterLink key={idx} value={item.value} link={item.link} />;
          })}
        </ul>
      </nav>
    </>
  );
};

export default FooterNav;
