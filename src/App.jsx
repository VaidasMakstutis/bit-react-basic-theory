import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Bag from "./Components/Domino/Bag";
import Create from "./Components/Domino/Create";
import Header from "./Components/Domino/Header";

function App() {

const [plates, setPlates] = useState([]);

const [updated, setUpdated] = useState(Date.now());

//CRUD//

const createPlate = (plate) => {
    axios.post('http://localhost:3003/dominos/add', plate)
    .then(res=> {
        setUpdated(Date.now());
    })
}

useEffect(() => {
    axios.get('http://localhost:3003/dominos/')
    .then(res=> {
        setPlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
    })
}, [updated]);

    return (
        <div className="App col top domino">
            <Header />
            <Create createPlate={createPlate} />
            <Bag plates={plates}/>
        </div>
    )
}

export default App;