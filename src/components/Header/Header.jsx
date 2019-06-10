import React, { Component } from "react";
import "./header.css";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container p-0">
          <nav className="navbar navbar-expand-lg navbar-light">
            <span className="nav-link p-0">
              <Link className="pl-2" to="/">
                <img
                  src={require("../../assets/images/breakfast.png")}
                  alt="brand-logo"
                  width="40px"
                />
                <span className="pl-2 pt-2">Food Recipe App</span>
              </Link>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-div"
              aria-controls="navbar-div"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbar-div">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <span className="dropdown-item nav-link">
                      <Link to="/recipe-search">Recipe Search</Link>
                    </span>
                    <span className="dropdown-item nav-link">
                      <Link to="/food-database">Food Database</Link>
                    </span>
                    <span className="dropdown-item nav-link">
                      <Link to="/nutrition-analysis">Nutrition Analysis</Link>
                    </span>
                  </div>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/about">About</Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/contact">Contact</Link>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
