import React, { Component } from "react";
import "./homepage.css";

import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <main className="homepage-comp">
        <section className="main-sec-div sec-1">
          <div className="container">
            <div className="sec-content">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="explore-btn">
                    <button className="btn">
                      <span>Explore Me</span>
                      &nbsp;
                      <i className="fas fa-angle-down" />
                    </button>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="sec-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-sec-div">
          <div className="container">
            <div className="sec-head">
              <h1>Our Services</h1>
            </div>
            <div className="sec-content">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4">
                  <div className="card-div">
                    <div className="card-icon pt-2 pb-2">
                      <i className="fas fa-utensils fa-2x" />
                    </div>
                    <div className="card-head pt-2 pb-2">
                      <h3>Recipe Search</h3>
                    </div>
                    <div className="card-desc pt-2 pb-2">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                      </p>
                      <button className="btn"><Link to="/recipe-search">Try Now</Link></button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                  <div className="card-div">
                    <div className="card-icon pt-2 pb-2">
                      <i className="fas fa-database fa-2x" />
                    </div>
                    <div className="card-head pt-2 pb-2">
                      <h3>Food Database</h3>
                    </div>
                    <div className="card-desc pt-2 pb-2">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                      </p>
                      <button className="btn"><Link to="/food-database">Try Now</Link></button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                  <div className="card-div">
                    <div className="card-icon pt-2 pb-2">
                      <i className="fas fa-user-nurse fa-2x" />
                    </div>
                    <div className="card-head pt-2 pb-2">
                      <h3>Nutrition Analysis</h3>
                    </div>
                    <div className="card-desc pt-2 pb-2">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                      </p>
                      <button className="btn"><Link to="/nutrition-analysis">Try Now</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default HomePage;
