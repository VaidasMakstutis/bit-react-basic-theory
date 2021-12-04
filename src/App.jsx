import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Bag from "./Components/Domino/Bag";
import Create from "./Components/Domino/Create";
import Edit from "./Components/Domino/Edit";
import Header from "./Components/Domino/Header";

function App() {

const [plates, setPlates] = useState([]);

const [updated, setUpdated] = useState(Date.now());

const [showEdit, setShowEdit] = useState({ left: 0, right: 0, id: 0 });

//MODAL//
const hideModal = () => {
    setShowEdit({ left: 0, right: 0, id: 0 });
}

const showModal = plate => {
    setShowEdit(plate);
    console.log('Plate', plate);
}


//CRUD//
const createPlate = (plate) => {
    axios.post('http://localhost:3003/dominos/add', plate)
    .then(res=> {
        setUpdated(Date.now());
    })
}

const editPlate = (plate) => {
    hideModal();
    axios.put('http://localhost:3003/dominos/update/'+plate.id, plate)
    .then(res=> {
        setUpdated(Date.now());
    })
}

const deletePlate = (plate) => {
    hideModal();
    axios.delete('http://localhost:3003/dominos/delete/'+plate.id)
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
            <Bag plates={plates} showModal={showModal}/>
            <Edit deletePlate={deletePlate} showEdit={showEdit} hideModal={hideModal} editPlate={editPlate} />
        </div>
    )
}

export default App;