import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./app.scss";
import AddRecipe from "./components/AddRecipe";
import Home from "./components/Home";
import ListRecipes from "./components/ListRepices";
// import DeleteRecipe from "./components/DeleteRecipe";

function App() {
  return (
    <main className="app_container">
      <div>
        <Link to="/">Home </Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/list-recipes">List Recipes</Link>
      </div>

      <Switch>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add-recipe" component={AddRecipe} exact />
          {/* <Route path="/about" component={DeleteRecipe} /> */}
          <Route path="/list-recipes" component={ListRecipes} />
        </Switch>
      </Switch>
    </main>
  );
}

export default App;
