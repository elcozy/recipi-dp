import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./app.scss";
import AddRecipe from "./components/AddRecipe";
import ListRecipes from "./components/ListRepices";
// import DeleteRecipe from "./components/DeleteRecipe";

const App = () => {
  return (
    <main className="app_container">
      <div>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side_nav"
          style={{ width: 280 }}
        >
          <Link className="nav-link text-white" to="/">
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap" /> */}
            </svg>
            <span className="fs-4">Recipe App</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <svg className="bi me-2" width="16" height="16">
                  {/* <use xlink:href="#home" /> */}
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/add-recipe">
                <svg className="bi me-2" width="16" height="16">
                  {/* <use xlink:href="#speedometer2" /> */}
                </svg>
                Add Recipe
              </Link>
            </li>
            {/* <li>
              <Link className="nav-link text-white" to="/list-recipes">
                <svg className="bi me-2" width="16" height="16">
                </svg>
                List Recipes
              </Link>
            </li> */}
          </ul>
          <hr />
        </div>
      </div>
      <div className="content">
        <Switch>
          <Switch>
            <Route path="/" component={ListRecipes} exact />
            {/* <Route path="/" component={Home} exact /> */}
            <Route path="/add-recipe" component={AddRecipe} exact />
          </Switch>
        </Switch>
      </div>
    </main>
  );
};

export default App;
