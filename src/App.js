import "./App.css";
import { Display } from "./components/Display";
import { ButtonArea } from "./components/ButtonArea";
function App() {
  return (
    // Correct way to give different input and all the buttons
    <div className="wrapper">
      <div className="calculator">
        <Display />
        <ButtonArea />
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default App;
