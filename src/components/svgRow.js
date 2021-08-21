import React from "react";

const SVGRow = (props) => {
  return (
    <div className="svgrow">
      <div>{props.SVG1}</div>
      <div>{props.SVG2}</div>
      <div>{props.SVG3}</div>
      <div>{props.SVG4}</div>
      <div>{props.SVG5}</div>
    </div>
  );
};

export default SVGRow;
