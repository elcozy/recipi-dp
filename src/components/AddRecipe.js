import React, { useState } from "react";
// import firebase from "../firebase.js";
import firebase from "../firebase";

const AddRecipe = () => {
  const mainData = {
    recipeName: "",
    ingredient: "",
    prepareStep: "",
    listOfIngredients: [],
    preparationSteps: [],
  };
  const [data, setData] = useState(mainData);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("recipe");
    const item = {
      recipeName: data.recipeName,
      listOfIngredients: data.listOfIngredients,
      preparationSteps: data.preparationSteps,
    };
    itemsRef.push(item);
    setData(mainData);
  };

  const addRecipeToArray = () => {
    console.log(data.ingredient, "has been added to the array");
    setData({
      ...data,
      listOfIngredients: [...data.listOfIngredients, data.ingredient],
      ingredient: "",
    });
  };
  const deleteRecipeToArray = (i, a) => {
    console.log(a, "has been deleted to the array");
    const deleteData = data.listOfIngredients.splice(i + 1);

    setData({
      ...data,
      listOfIngredients: deleteData,
    });
  };

  const addIngredToArray = () => {
    console.log(data.ingredient, "has been added to the array");
    setData({
      ...data,
      preparationSteps: [...data.preparationSteps, data.prepareStep],
      prepareStep: "",
    });
  };
  const deleteIngredToArray = (i, a) => {
    console.log(a, "has been deleted to the array");
    const deleteData = data.preparationSteps.splice(i + 1);

    setData({
      ...data,
      preparationSteps: deleteData,
    });
  };
  const {
    ingredient,
    recipeName,
    listOfIngredients,
    preparationSteps,
    prepareStep,
  } = data;

  const buttonActive =
    !!recipeName && listOfIngredients.length > 0 && preparationSteps.length > 0;

  console.log(buttonActive, listOfIngredients.length);
  return (
    <div>
      <button
        disabled={!buttonActive}
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Save Recipe
      </button>
      <div className="mb-3">
        <label htmlFor="recipeName" className="form-label">
          Recipe Name
        </label>
        <input
          type="text"
          className="form-control"
          name="recipeName"
          placeholder="Recipe Name"
          onChange={(e) => handleChange(e)}
          value={recipeName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="listOfIngredients" className="form-label">
          List of Ingredients
        </label>
        <div className="ingredient-container">
          <input
            type="text"
            className="form-control"
            name="ingredient"
            placeholder="List of Ingriedients"
            onChange={(e) => handleChange(e)}
            value={ingredient}
          />
          <button
            id="ingredientButton"
            className="btn btn-primary"
            disabled={!data.ingredient}
            onClick={addRecipeToArray}
          >
            Add
          </button>
        </div>
        {listOfIngredients.length > 0 && (
          <div id="ingredientsResult">
            Ingredients:
            {listOfIngredients.map((a, i) => (
              <div className="results" key={i}>
                <span>
                  {i + 1}. {a}
                </span>
                <button
                  className="btn btn-danger btn-sm my-1"
                  onClick={() => deleteRecipeToArray(i, a)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}
        <hr />
        gg
      </div>

      <div className="mb-3">
        <label htmlFor="preparationSteps" className="form-label">
          Preparation Steps
        </label>
        <div className="ingredient-container">
          <input
            type="text"
            className="form-control"
            name="prepareStep"
            placeholder="Preparation Steps"
            onChange={(e) => handleChange(e)}
            value={prepareStep}
          />
          <button
            id="ingredientButton"
            className="btn btn-primary"
            disabled={!data.prepareStep}
            onClick={addIngredToArray}
          >
            Add
          </button>
        </div>
        {preparationSteps.length > 0 && (
          <div id="ingredientsResult">
            {preparationSteps.map((a, i) => (
              <div className="results" key={i}>
                <span>-{a}</span>
                <button
                  className="btn btn-danger btn-sm my-1"
                  onClick={() => deleteIngredToArray(i, a)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        disabled={!buttonActive}
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Save Recipe
      </button>
    </div>
  );
};
export default AddRecipe;
