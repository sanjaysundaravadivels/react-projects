import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showlink, setShowlink] = useState(false);
  const linkscontainerref = useRef(null);
  const linksref = useRef(null);
  useEffect(() => {
    if (showlink) {
      const height = linksref.current.getBoundingClientRect().height;
      linkscontainerref.current.style.height = `${height}px`;
    } else {
      linkscontainerref.current.style.height = `0px`;
    }
  }, [showlink]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowlink(!showlink)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkscontainerref}>
          <ul className="links" ref={linksref}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialicons) => {
            const { id, url, icon } = socialicons;
            return (
              <li>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
