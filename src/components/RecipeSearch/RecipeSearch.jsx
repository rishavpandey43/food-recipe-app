import React, { Component } from "react";
import "./recipesearch.css";
import { Loading1, Loading2 } from "../LoadingComponent/LoadingComponent";
import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";

const RECIPE_SEARCH_APP_ID = process.env.REACT_APP_RECIPE_SEARCH_APP_ID;
const RECIPE_SEARCH_APP_KEY = process.env.REACT_APP_RECIPE_SEARCH_APP_KEY;

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
      mainRecipeList: null,
      displayRecipeDiv: false,
      displayLoader1: false,
      toggleModal: false,
      selectedRecipe: null,
      errorMsg: false,
    };
  }

  handleInputChange = e => {
    this.setState({ searchItem: e.target.value });
  };

  getRecipe = async () => {
    this.setState({
      displayRecipeDiv: true,
      displayLoader1: true,
      mainRecipeList: null,
      errorMsg: false
    });
    const response = await fetch(
      `https://api.edamam.com/search?q=${
        this.state.searchItem
      }&app_id=${RECIPE_SEARCH_APP_ID}&app_key=${RECIPE_SEARCH_APP_KEY}`
    );
    const dataReceived = await response.json();
    if (dataReceived) {
      this.setState({
        displayLoader1: false,
        mainRecipeList: dataReceived,
        errorMsg: dataReceived.hits.length === 0 ? true : false
      });
    }
  };

  searchRecipe = e => {
    e.preventDefault();
    if (this.state.searchItem !== "") this.getRecipe();
    else alert("Fill the search box to proceed further!");
  };

  // openModal = () => {
  //   this.setState({ toggleModal: true });
  // };

  // closeModal = () => {
  //   this.setState({ toggleModal: false });
  // };

  render() {
    let mainRecipeList = [];
    let recipeList = [];
    if (this.state.mainRecipeList) {
      mainRecipeList = this.state.mainRecipeList.hits;
      recipeList = mainRecipeList.map((item, i) => (
        <div key={i} className="col-12 col-sm-3 mt-3 card-col">
          <Recipes recipe={item.recipe} openModal={this.openModal} />
        </div>
      ));
    }
    return (
      <main className="recipe-search-comp">
        <section className="container sec-div main-sec">
          <div className="sec-head">
            <h1>Welcome to My Recipe World</h1>
          </div>
          <div className="sec-content">
            <p>
              1.7+ million nutritionally analyzed recipes, Detailed macro and
              micronutrient data Filter by calories, diets and allergens 1.7+
              million nutritionally analyzed recipes, Detailed macro and
              micronutrient data Filter by calories
            </p>
          </div>
          <div className="main-search-div">
            <div className="sec-sub-head">
              <h2>Search for any recipe you wish</h2>
            </div>
            <div className="search-box-div pt-3">
              <form onSubmit={this.searchRecipe}>
                <input
                  className="search-box"
                  type="text"
                  placeholder="Find the best recipes from across the world..."
                  required
                  value={this.state.searchItem}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="bn search-btn ml-2">
                  search
                </button>
              </form>
            </div>
            <div
              className={
                this.state.displayRecipeDiv
                  ? "d-block recipe-div"
                  : "d-none recipe-div"
              }
            >
              <div
                className={
                  this.state.displayLoader1 ? "d-block pt-5" : "d-none pt-5"
                }
              >
                <Loading1 />
              </div>
              <div className="item-div pt-3">
                <div className="filter-div" />
                <div className="item-list-div">
                  <div className="row">{recipeList}</div>
                  <div className={this.state.errorMsg ? "d-block" : "d-none"}><span>Sorry, no relevent recipe found based on your search, please search for valid recipe!</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SingleRecipe
          toggleModal={this.state.toggleModal}
          closeModal={this.closeModal}
        />
      </main>
    );
  }
}

export default RecipeSearch;
