import React from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FoodDatabase from "./components/FoodDatabase/FoodDatabase";
import NutritionAnalysis from "./components/NutritionAnalysis/NutritionAnalysis";
import RecipeSearch from "./components/RecipeSearch/RecipeSearch";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="main-app">
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              exact
              path="/recipe-search"
              render={() => <RecipeSearch />}
            />
            <Route
              exact
              path="/food-database"
              render={() => <FoodDatabase />}
            />
            <Route
              exact
              path="/nutrition-analysis"
              render={() => <NutritionAnalysis />}
            />
            <Route
              exact
              path="/about"
              render={() => <About />}
            />
            <Route
              exact
              path="/contact"
              render={() => <Contact />}
            />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
