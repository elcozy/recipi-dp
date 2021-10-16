import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const ListRepices = () => {
  const [savedData, setSavedData] = useState([]);
  const [modalContent, setModalContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsRef = firebase.database().ref("recipe");
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      setLoading(false);
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          recipeName: items[item].recipeName,
          listOfIngredients: items[item].listOfIngredients,
          preparationSteps: items[item].preparationSteps,
        });
      }

      setSavedData(newState.reverse()); //reverse the array
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modalData = (e) => {
    setModalContent(e);
    console.log(e);
  };

  return (
    <div>
      <div className="cards">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {savedData &&
              savedData.map((item, i) => (
                <div className="col-sm-6 my-2" key={item.id}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{item.recipeName}</h5>
                      {savedData[i].listOfIngredients && (
                        <div className="ingredientsResult">
                          {savedData[i].listOfIngredients.map((a, i) => (
                            <span key={i}>{a} </span>
                          ))}
                        </div>
                      )}
                      {item.preparationSteps && (
                        <input
                          type="text"
                          className="form-control"
                          name="preparationSteps"
                          placeholder="Preparation Steps"
                          disabled
                          value={item.preparationSteps}
                        >
                          {/* {item.preparationSteps} */}
                        </input>
                      )}

                      <button
                        type="button"
                        className="btn btn-secondary btn-sm my-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => modalData(item)}
                      >
                        View {item.recipeName} Recipe
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="dps_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-capitalize fw-bold"
                id="dps_modal"
              >
                {modalContent.recipeName} Recipe
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="fw-bold">List of Ingredients</h5>
              {modalContent.listOfIngredients && (
                <div id="ingredientsResult">
                  {modalContent.listOfIngredients.map((a, i) => (
                    <p className="fs-6 text-capitalize" key={i}>
                      {a}
                    </p>
                  ))}
                </div>
              )}
              <h5 className="fw-bold">Preparation Steps</h5>
              <p>{modalContent.preparationSteps}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListRepices;
