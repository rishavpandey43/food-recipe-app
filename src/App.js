import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    console.log(process.env.REACT_APP_RECIPE_SEARCH_APP_KEY);
    return (
      <div className="main-app">
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
