import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import joypictures_logo from "./../Assets/IMG_0730-removebg-preview.png";
import { whatsappLink } from "../Data/Data";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    // { id: "partners", label: "Partners" },
    { id: "studios", label: "Studios" },
    // { id: "investments", label: "Investments" },
    { id: "packages", label: "Packages" },
    { id: "branches", label: "Branches" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg mobile-nav fixed-top ${
        navbar ? "shadow bg-light-black" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#home">
          <img
            src={joypictures_logo}
            alt="joypictures_logo"
            style={{ width: "8rem" }}
          />
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fa-solid fa-bars text-white"></i>
        </button>

        {/* NavLinks */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.id}>
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  activeClass="active-link"
                  className={`nav-link ${navbar ? "text-white" : ""}`}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}

            {/* Book Now button */}
            <li className="nav-item ms-lg-3">
              <a
                href={whatsappLink}
                className="btn btn-warning px-4 py-2 rounded-pill"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
