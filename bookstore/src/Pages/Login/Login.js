import React, { useState } from "react";
import { Link } from "react-router-dom";
import book1 from "../../Images/book-01.png";

import "./Login.css";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const ChangeuserData = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    switch (name) {
      case "email":
        setFormError((prevFormError) => ({
          ...prevFormError,
          email:
            value.length === 0
              ? "This field is required."
              : !emailRegex.test(value)
              ? "Please enter a valid email"
              : "",
        }));
        break;
      case "password":
        setFormError((prevFormError) => ({
          ...prevFormError,
          password:
            value.length === 0
              ? "This field is required."
              : !passwordRegex.test(value)
              ? "Password should be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
              : "",
        }));
        break;
      default:
        break;
    }
  };

  const submitData = (e) => {
    e.preventDefault();

    if (userData.email.length === 0 || userData.password.length === 0) {
      setFormError({
        email: "This field is required.",
        password: "This field is required.",
      });
    } else if (!emailRegex.test(userData.email)) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        email: "Please enter a valid email.",
      }));
    } else if (!passwordRegex.test(userData.password)) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        password:
          "Password should be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character.",
      }));
    } else {
      setSuccessMessage("Login successful!");

      // Clearing any previous error messages
      setFormError({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="mt-2 mb-5 mx-auto" style={{ width: "150px" }}>
        <img
          src={book1}
          style={{ width: "100%", height: "150px" }}
          className="d-block"
          alt="books"
        />
      </div>
      <form onSubmit={submitData}>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In To Our Book Store
                </h5>
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      formError.email ? "is-invalid" : ""
                    }`}
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={ChangeuserData}
                    value={userData.email}
                    name="email"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                  {formError.email && (
                    <div className="invalid-feedback">{formError.email}</div>
                  )}
                </div>
                <div className="form-floating mt-5 mb-3">
                  <input
                    type="password"
                    className={`form-control ${
                      formError.password ? "is-invalid" : ""
                    }`}
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={ChangeuserData}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  {formError.password && (
                    <div className="invalid-feedback">{formError.password}</div>
                  )}
                </div>
                <div className="d-grid">
                  <button
                    className="filled-button text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <hr className="my-4" />

                  <div className="mt-3 text-center">
                    <p>
                      <span style={{ fontSize: "1.2em", marginRight: "8px" }}>
                        Create a new account?
                      </span>
                      <Link to="/register" className="filled-button">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
