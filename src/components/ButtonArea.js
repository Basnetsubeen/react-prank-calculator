import React from "react";
import { Button } from "./Button";

export const ButtonArea = ({ handleOnClick }) => {
  const buttons = [
    {
      label: "AC",
      clsNm: "btn-ac",
    },
    {
      label: "C",
      clsNm: "btn-c",
    },
    {
      label: "*",
      clsNm: "btn-div",
    },
    {
      label: "/",
      clsNm: "btn-multi",
    },
    {
      label: "7",
      clsNm: "btn-7",
    },
    {
      label: "8",
      clsNm: "btn-8",
    },
    {
      label: "9",
      clsNm: "btn-9",
    },
    {
      label: "+",
      clsNm: "btn-plus",
    },
    {
      label: "4",
      clsNm: "btn-4",
    },
    {
      label: "5",
      clsNm: "btn-5",
    },
    {
      label: "6",
      clsNm: "btn-6",
    },
    {
      label: "-",
      clsNm: "btn-minus",
    },
    {
      label: "1",
      clsNm: "btn-1",
    },
    {
      label: "2",
      clsNm: "btn-2",
    },
    {
      label: "3",
      clsNm: "btn-3",
    },
    {
      label: "=",
      clsNm: "btn-ans",
    },
    {
      label: ".",
      clsNm: "btn-dot",
    },
    {
      label: "0",
      clsNm: "btn-0",
    },
  ];
  return (
    <div className="btn-area">
      {buttons.map((item, i) => {
        return (
          <Button
            key={i}
            label={item.label}
            clsNm={item.clsNm}
            handleOnClick={handleOnClick}
          />
        );

        // Destructuring and we can replace above code with below code
        // return <Button key={i} {...item} />;
      })}
    </div>
  );
};
