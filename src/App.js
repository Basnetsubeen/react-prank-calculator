import { useState } from "react";
import "./App.css";

import { Display } from "./components/Display";
import { ButtonArea } from "./components/ButtonArea";
import a from "./components/a.wav";

const operators = ["+", "-", "*", "/"];
const App = () => {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setisPrank] = useState(false);

  const [audio] = useState(new Audio(a));

  const handleOnClick = (value) => {
    isPrank && setisPrank(false);
    if (value === "AC") {
      setStr("");
      return;
    }
    if (value === "=") {
      return onTotal();
    }
    if (value === "C") {
      const temstr = str.slice(0, -1);
      setStr(temstr);
      return;
    }
    if (operators.includes(value)) {
      setLastOperator(value);
      const lastchar = str.slice(-1);
      if (operators.includes(lastchar)) {
        const strWithOutLastChar = str.slice(0, -1);
        setStr(strWithOutLastChar + value);
        return;
      }
    }
    if (value === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        // const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);
        if (afterLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + value);
  };
  const onTotal = () => {
    const prankVal = randomNumber();
    prankVal > 0 && audio.play() && setisPrank(true);
    const ttl = eval(str) + prankVal;
    setStr(ttl.toFixed(2).toString());
  };

  const randomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };
  return (
    // Correct way to give different input and all the buttons
    <div className="wrapper">
      <div className="calculator">
        <Display str={str} isPrank={isPrank} />
        <ButtonArea handleOnClick={handleOnClick} />
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default App;
