import React from "react";

export const Button = ({ clsNm, label, handleOnClick }) => {
  return (
    <div className={clsNm} onClick={() => handleOnClick(label)}>
      {label}
    </div>
  );
};
