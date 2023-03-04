import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__links">
          <a href="/Contact" className="navbar__link">
            Contact
          </a>
          <a href="/Gallery" className="navbar__link">
            Gallery
          </a>
        </div>
        <div className="footer__info">Harry Crosby Photography 2023</div>
        
      </div>
    </>
  );
};
export default Footer;
