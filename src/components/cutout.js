import React from "react";

const CutoutText = (props) => {
  return (
    <svg
      version="1.1"
      baseProfile="full"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id={props.id} maskUnits="userSpaceOnUse">
          <rect width="100%" height="100%" fill="white" />
          <text
            dominantBaseline="middle"
            textAnchor="middle"
            className="svg-title"
            x="50%"
            y="50%"
          >
            {props.text}
          </text>
        </mask>
      </defs>
      <rect
        className="svg-title"
        width="100%"
        height="100%"
        fillRule="evenodd"
        mask={`url(#${props.id})`}
      />
    </svg>
  );
};

export default CutoutText;
