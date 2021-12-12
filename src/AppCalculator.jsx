import { useReducer, useState } from "react";
import calculatorReducer from "./Reducers/calculatorReducer";
import {actionAdd, actionDiff, actionMult, actionDiv } from "./Actions/calculator";

function App() {
  const [calculator, calculatorDispatch] = useReducer(calculatorReducer, 0);
  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);

  const sum = () => {
    calculatorDispatch(actionAdd({ d1: d1, d2: d2 }));
  };

  const diff = () => {
    calculatorDispatch(actionDiff({ d1: d1, d2: d2 }));
  };

  const mult = () => {
    calculatorDispatch(actionMult({ d1: d1, d2: d2 }));
  };

  const div = () => {
    calculatorDispatch(actionDiv({ d1: d1, d2: d2 }));
  };

  return (
    <div className="App col top">
      <div className="calc">
        <h1>Calculator</h1>
        <div className="calc_in">
          <input type="text" value={d1} onChange={e => setD1(e.target.value)} />
          <input type="text" value={d2} onChange={e => setD2(e.target.value)} />
        </div>
        <div className="calc_res">{calculator}</div>
        <div className="calc_butt">
          <button className="button" onClick={sum}>+</button>
          <button className="button" onClick={diff}>-</button>
          <button className="button" onClick={mult}>*</button>
          <button className="button" onClick={div}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;