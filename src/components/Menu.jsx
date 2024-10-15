import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";

export const Menu = () => {
  const navbarRef = useRef(null); // Ref do navbaru

  // Efekt scrolla dla zmiany stylu na navbarze
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add(
          "bg-dark",
          "border-bottom",
          "border-secondary",
          "navbar-sticky"
        );
      } else {
        navbarRef.current.classList.remove(
          "bg-dark",
          "border-bottom",
          "border-secondary",
          "navbar-sticky"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-lg sticky-top navbar-dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#solutions">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">
                Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#expertise">
                Expertise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>
          <span className="nav-item">
            <span className="fa-stack">
              <a href="https://facebook.com" target="_blank">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x text-white"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://twitter.com" target="_blank">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x text-white"></i>
              </a>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};
