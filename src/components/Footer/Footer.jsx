import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <a
            className="anchor-tag"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a
            className="anchor-tag"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a
            className="anchor-tag"
            href="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            className="anchor-tag"
            href="https://www.linkedin.com/in/suryakommanapalli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
          <a
            className="anchor-tag"
            href="https://github.com/surya123866"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaGithub />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
