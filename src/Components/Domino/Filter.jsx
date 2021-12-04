import { useState } from "react";
function Filter({ clientFilter, plates }) {

    const [filterC, setFilterC] = useState('N');

    const controlC = e => {
        setFilterC(e.target.value);
        //------------------------------//
        let platesCopy = [...plates];
        switch(e.target.value) {
            case 'SS':
                platesCopy = platesCopy.filter(p => p.left === p.right);
                console.log()
                break;
            case 'ES':
                platesCopy = platesCopy.filter(p => !(p.left*p.right));
                break;
            default:
        }
        clientFilter(platesCopy);
    }

    return (
        <>
            <div className="domino_header_sort">
                <h2>Client Filter</h2>
                <select value={filterC} onChange={controlC}>
                    <option value="N">Filter the Plates</option>
                    <option value="SS">Same sides</option>
                    <option value="ES">With empty side</option>
                </select>
            </div>
        </>
    )
}

export default Filter;