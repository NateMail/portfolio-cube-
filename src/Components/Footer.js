import React from "react";
import {
  AiFillFilePdf,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <a
          href="./Documents/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__text"
        >
          <AiFillFilePdf className="footer__icon" />
        </a>
      </div>
      <div className="footer__section">
        <a href="mailto:nathan.mailhiot@gmail.com" className="footer__text">
          <AiFillMail className="footer__icon" />
        </a>
      </div>
      <div className="footer__section">
        <a
          href="https://www.linkedin.com/in/nathanmailhiot/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__text"
        >
          <AiFillLinkedin className="footer__icon" />
        </a>
      </div>
      <div className="footer__section">
        <a
          href="https://github.com/NateMail"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__text"
        >
          <AiFillGithub className="footer__icon" />
        </a>
      </div>
    </div>
  );
}
