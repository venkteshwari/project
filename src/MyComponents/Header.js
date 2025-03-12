import React from 'react';
import { FaHome, FaInfoCircle, FaImages, FaUser, FaBook, FaPhone } from 'react-icons/fa';

export default function Header() {
  // ✅ Function to close the navbar toggle when link is clicked
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.innerWidth < 992) {
      navbarToggler.click(); // This will close the navbar
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img src="images/logo.png" alt="Logo" style={{ height: '40px' }} /> COMPUTER{' '}
            <span style={{ color: '#007bff' }}>INSTITUTE</span>
          </a>
          <button
            className="navbar-toggler" style={{border:"none"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#slider" onClick={closeNavbar}>
                  <FaHome className="me-1" /> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeNavbar}>
                  <FaInfoCircle className="me-1" /> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery" onClick={closeNavbar}>
                  <FaImages className="me-1" /> Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile" onClick={closeNavbar}>
                  <FaUser className="me-1" /> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#course" onClick={closeNavbar}>
                  <FaBook className="me-1" /> Course
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={closeNavbar}>
                  <FaPhone className="me-1" /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
