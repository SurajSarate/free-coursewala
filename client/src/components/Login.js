import React, { useState,useContext } from "react";
import { useNavigate } from "react-router";
import CourseContext from "../context/course/courseContext";
require('dotenv').config();

function Login() {
  const context = useContext(CourseContext);
  const {fetchAdmin} = context;
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
     fetchAdmin('true');
      localStorage.setItem("token", json.authtoken);
     navigate("/admin/home");
    } else {
      alert("invaild");
    }
  };
  return (
    <div className="main-wrapper">
      <section className="login-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="login-form box">
                <h2 className="form-title text-center">Admin Log In</h2>
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={onChange}
                      value={credentials.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={onChange}
                      value={credentials.password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-theme btn-block btn-form"
                  >
                    log in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
