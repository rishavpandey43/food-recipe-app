import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./underconstruction.css";
import constructionImg from "../../assets/images/under-512.png";

class UnderConstruction extends Component {
  render() {
    return (
      <main className="underconstruction-comp">
        <figure>
          <img
            src={constructionImg}
            alt="under-construction"
            className="main-img"
            width="20%"
          />
        </figure>
        <h1>This page is under construction, please visit later on.</h1>
        <h3>Thank you, for your visit!</h3>
        <Link to="/">Click here to go to Homepage</Link>
      </main>
    );
  }
}

export default UnderConstruction;
