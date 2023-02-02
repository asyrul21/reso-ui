import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ to }) => {
  return (
    <div className="component_back_container">
      <Link to={to} className="component_back_link">
        {"<"} Back
      </Link>
    </div>
  );
};

export default BackButton;
