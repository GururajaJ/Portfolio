import React from "react";
import "./NavBar.css";

export default function Nav() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a>Portfolio</a>
      </div>
      <ul className="navbar-links">
        <li>
          <button onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleScroll("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleScroll("services")}>Certificates</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}
