import { useState } from "react";

import BlueButton from "./Components/Lift/BlueButton";
import RedButton from "./Components/Lift/RedButton";

function App() {

    const [buttonCount, setButtonCount] = useState(0);

    const plus = () => {
        setButtonCount(buttonCount + 1);
    }

    const [redButtonCount, setRedButtonCount] = useState(0);

    const minus = () => {
        setRedButtonCount(redButtonCount - 1);
    }

  return (
    <div className="App col">
      <div>Labas rytas!</div>
      <BlueButton buttonCount={buttonCount} plus={plus}/>
      <RedButton count={redButtonCount} minus={minus}/>
    </div>
  );
}

export default App;