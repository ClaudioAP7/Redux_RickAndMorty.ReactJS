import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with{" "}
      <span role="img" arial-label="heart">
        💜
      </span>{" "}
      by
      <a
        href="https://www.linkedin.com/in/claudio-andres-pichicon-477b6a190/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img">&lt;&gt;</span> <span>Claudio Pichicon</span>
      </a>
    </div>
    <div className="footer__location">
      CH,
      <span>Santiago</span>, 2021
    </div>
  </footer>
);

export default Footer;
