import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="footer-section mt-5 bg-dark text-light p-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-12 text-sm-center mb-4 mb-lg-0">
              <h5 className="text-uppercase">BookStore</h5>
            </div>
            <div className="d-flex col-lg-6 col-md-12 justify-content-sm-center mb-4 mb-lg-0 mx-auto">
              <ul className="d-flex list-unstyled">
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/books">
                    Books
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/">
                    About Author
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex col-lg-2 col-md-12 justify-content-sm-center mb-4 mb-lg-0">
              <ul className="d-flex list-unstyled">
                <li className="nav-item me-3">
                  <Link className="nav-link" to="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link" to="https://web.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link" to="https://www.youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link" to="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-3 mt-5 mt-sm-2">
          <div className="container text-center">
            <p className="mb-0">
              Copyright &copy; 2024 Bookstore | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
