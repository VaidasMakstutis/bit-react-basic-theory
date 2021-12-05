import { useState } from "react";
import Children1 from "./Components/Context/Children1";
import All from "..//.//src/Contexts/All";

function App() {

const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');

    return (
        <All.Provider value={input2}>
        <div className="App col">
            <h2>Hello,</h2>
            <input type="text" onChange={e => setInput1(e.target.value)} value={input1}></input>
            <input type="text" onChange={e => setInput2(e.target.value)} value={input2}></input>
            <Children1 say={input1} />
        </div>
        </All.Provider>
    )
}

export default App;