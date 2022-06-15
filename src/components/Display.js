import React from "react";

export const Display = ({ str, isPrank }) => {
  const clsNm = isPrank ? "display prank" : "display";
  return <div className={clsNm}>{str || "0.00"}</div>;
};
