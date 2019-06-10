import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="footer-col-1">
                <div className="social-icon-list row">
                  <div className="social-icons">
                    <a
                      href="https://facebook.com/rishavpandey43"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-facebook-f fa-1.5x" />
                    </a>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://linkedin.com/in/rishavpandey43/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-linkedin-in fa-1.5x" />
                    </a>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://twitter.com/rishavpandey43"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-twitter fa-1.5x" />
                    </a>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://www.instagram.com/rishavpandey43/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-instagram fa-1.5x" />
                    </a>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://www.quora.com/profile/Rishav-Pandey-8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-quora fa-1.5x" />
                    </a>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://stackoverflow.com/users/7888165/rishav-pandey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-stack-overflow fa-1.5x" />
                    </a>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://github.com/rishavpandey43"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons"
                    >
                      <i className="fab fa-github fa-1.5x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="footer-col-2">
                <div className="pt-4">
                  <p className="copyright">
                    <span>
                      Maintained and Developed by <em>Rishav Pandey</em>
                    </span>
                    <br/>
                    <span>© 2019. All rights reserved.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-footer">
          <div className="container">
            <p>
              Made with <i className="fa fa-heart pulse custom" /> in India
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
