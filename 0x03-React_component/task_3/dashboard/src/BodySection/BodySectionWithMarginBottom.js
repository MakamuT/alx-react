// task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js
import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

// Define prop types for validation
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
