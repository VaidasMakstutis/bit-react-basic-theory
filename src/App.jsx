import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Bag from "./Components/Domino/Bag";
import Create from "./Components/Domino/Create";
import Edit from "./Components/Domino/Edit";
import Header from "./Components/Domino/Header";

function App() {

const [plates, setPlates] = useState([]);

const [updated, setUpdated] = useState(Date.now());

const [showEdit, setShowEdit] = useState({ left: 0, right: 0, id: 0 });

const [platesMaster, setPlatesMaster] = useState([]);

//SORTS and FILTERS//

const clientSort = (plates) => {
    setPlates(plates);
}

const clientFilter = (plates) => {
    setPlates(plates);
}

const serverSort = (sort) => {
    axios.get('http://localhost:3003/dominos/sort/' + sort)
    .then(res => {
            savePlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
    })
}

const serverFilter = (filter) => {
    axios.get('http://localhost:3003/dominos/filter/' + filter)
    .then(res => {
            setPlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
    })
}

//MODAL//
const hideModal = () => {
    setShowEdit({ left: 0, right: 0, id: 0 });
}

const showModal = plate => {
    setShowEdit(plate);
    // console.log('Plate', plate);
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
        savePlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
    })
}, [updated]);

const savePlates = (plates) => {
    setPlates(plates);
    setPlatesMaster(plates);
}

    return (
        <div className="App col top domino">
            <Header clientFilter={clientFilter} serverFilter={serverFilter} clientSort={clientSort} serverSort={serverSort} plates={platesMaster} />
            <Create createPlate={createPlate} />
            <Bag plates={plates} showModal={showModal}/>
            <Edit deletePlate={deletePlate} showEdit={showEdit} hideModal={hideModal} editPlate={editPlate} />
        </div>
    )
}

export default App;