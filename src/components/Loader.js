import React from "react";
import "../styles/loader.scss";

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`loader_container ${fullScreen ? "full" : null}`}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
