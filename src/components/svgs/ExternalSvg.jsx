import React from "react";

const ExternalSvg = () => {
  return (
    <svg
      className="relative h-8 w-8"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />{" "}
      <line x1="10" y1="14" x2="20" y2="4" />{" "}
      <polyline points="15 4 20 4 20 9" />
    </svg>
  );
};

export default ExternalSvg;
