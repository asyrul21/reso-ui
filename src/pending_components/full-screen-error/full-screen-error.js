import React from "react";

const FullScreenError = ({ text }) => {
  return (
    <div className="component_fullscreenerror_container">
      <div className="component_fullscreenerror_icon">!</div>
      <p className="loader_text component_fullscreenerror_text">{text}</p>
    </div>
  );
};

export default FullScreenError;
