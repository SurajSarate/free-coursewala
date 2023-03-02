import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 text-center">
                <div className="footer-item">
                  <h3 className="footer-logo">
                    <span>Course</span>Wala
                  </h3>
                  <ul>
                    <li>
                      <a href="/">blog</a>
                    </li>
                    <li>
                      <a href="/">about</a>
                    </li>
                    <li>
                      <a href="/">certificates</a>
                    </li>
                    <li>
                      <a href="/">what we offer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <div className="footer-item">
                  <h3>learning</h3>
                  <ul>
                    <li>
                      <a href="/">Web-Devlopment</a>
                    </li>
                    <li>
                      <a href="/">Java</a>
                    </li>
                    <li>
                      <a href="/">Yoga</a>
                    </li>
                    <li>
                      <a href="/">Others..</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <div className="footer-item">
                  <h3>get in touch</h3>
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fab fa-instagram social-icon"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-telegram social-icon"></i> Telegram
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin social-icon"></i> Linkedin
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter social-icon"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-github social-icon"></i> Git
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="m-0 py-4 text-center">
              Copyright &copy;2021 The CourseWala
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
