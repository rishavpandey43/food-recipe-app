import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="main-content">
          <div className="container">
            <p className="copyright">
              <span>
                Maintained and Developed by&nbsp;
                <em>
                  <a
                    href="https://rishavpandey.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rishav Pandey
                  </a>
                </em>
              </span>
              <br />
              <span>© 2019. All rights reserved.</span>
              <br />
              <span>
                The website is currently under development, more new features
                will be added soon.
              </span>
            </p>
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
