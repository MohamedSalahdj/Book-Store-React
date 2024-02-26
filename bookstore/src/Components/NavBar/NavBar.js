import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm"
      style={{ height: "80px" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          BookStore
        </Link>
        <span
          className="ms-5 border-0 order-lg-1 ms-auto me-4 cool-text"
          id="basket-shopping"
          style={{ cursor: "pointer" }}
        >
          <span className="me-3">$0.00</span>
          <FontAwesomeIcon icon={faBasketShopping} size="lg" />
        </span>
        <span
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </span>
        <div
          className="collapse navbar-collapse bg-body-tertiary"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                login
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            {/* {toggle && (
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            )} */}
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                opacity: toggle ? "1" : "0",
                visibility: toggle ? "visible" : "hidden",
                transition: "opacity 0.5s ease, visibility 0.5s ease",
                // display: toggle ? "block" : "none",
                borderRadius: "0",
              }}
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            <span
              onClick={handleClick}
              className="input-group-text border-0"
              id="search-addon"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
