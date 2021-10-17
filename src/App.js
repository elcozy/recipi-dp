import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./app.scss";
import AddRecipe from "./components/AddRecipe";
import ListRecipes from "./components/ListRepices";
// import DeleteRecipe from "./components/DeleteRecipe";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  const handleWindowResize = () => {
    const resolution = window.innerWidth;
    const isMobile = resolution <= 768;
    setIsDesktop(!isMobile);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize(), false);
  }, []);
  return (
    <main className="app_container">
      <div>
        {isDesktop ? (
          <nav
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side_nav"
            style={{ width: 280 }}
          >
            <Link className="nav-link text-white" to="/">
              <span className="fs-4">Recipe App</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/add-recipe">
                  Add Recipe
                </Link>
              </li>
            </ul>
            <hr />
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="nav-link text-white" to="/">
                <span className="fs-4">Recipe App</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                  <Link className="nav-link text-white" to="/add-recipe">
                    Add Recipe
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
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
