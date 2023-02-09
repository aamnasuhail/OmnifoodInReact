import React from "react";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="grid grid--3--cols footer-container">
          <FooterNav />
          <FooterNav />
          <FooterNav />
        </div>
      </footer>
    </>
  );
}

export default Footer;
