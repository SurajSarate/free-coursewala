import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourseContext from "../context/course/courseContext";

const Navbar = () => {
  const context = useContext(CourseContext);
  const { admin } = context;
  let navigate = useNavigate();
  const [toggle, setMode] = useState({ mode: "light", msg: "Enable" });
  const chngeMode = () => {
    if (toggle.mode === "light") {
      document.body.classList.add("t-dark");
      setMode({ mode: "dark", msg: "Disable" });
    } else {
      document.body.classList.remove("t-dark");
      setMode({ mode: "light", msg: "Enable" });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="main-wrapper2">
      <nav className={`navbar navbar-expand-lg`}>
        <div className="container">
          <div className="navbar-brand header-logo" href="/">
            {admin === "true" ? (
              <Link to="/admin/home">
                <span>Course</span>Wala
              </Link>
            ) : (
              <Link to="/">
                <span>Course</span>Wala
              </Link>
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon d-flex align-items-center justify-content-center ">
              <i className=" fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {admin === "true" ? (
                  <Link className="nav-link" to="/admin/home">Home</Link>
                ) : (
                  <Link className="nav-link" to="/">Home</Link>
                )}
              </li>
              <li className="nav-item">
                {admin === "true" ? (
                  <Link className="nav-link" to="/admin/courses">Courses</Link>
                ) : (
                  <Link className="nav-link" to="/courses">Courses</Link>
                )}
              </li>
              <li className={'nav-item'}>
              {admin === "true" ? (
                  <Link className="nav-link" to="/admin/contact">Contact Us</Link>
                ) : (
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                )}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Change Mode
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="">
                    <div className=" nav-link form-check form-switch text-dark">
                      <input
                        className="ms-1 form-check-input"
                        onClick={chngeMode}
                        type="checkbox"
                        role="switch"
                        id="darkModeSwitch"
                      />
                      <label
                        className="ps-2 form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        {toggle.msg}
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${admin !== "true" ? "d-none" : ""}`}>
                <Link className="nav-link" to="/admin/addcourse">
                  Add Course
                </Link>
              </li>
              <li className={`nav-item ${admin !== "true" ? "d-none" : ""}`}>
                <button className="m-0 btn btn-outline-danger" onClick={logout}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
