import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top">
      <div className="container py-3 px-5">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>
        <button
          className="navbar-toggler"
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
          <form className="d-flex ms-auto" role="search">
            <ul className="navbar-nav mb-2 gap-4 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/support"
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
