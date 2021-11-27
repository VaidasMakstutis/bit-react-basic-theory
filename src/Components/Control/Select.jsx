import { useState } from "react";

function Select() {

const [select, setSelect] = useState(0);

const changed = e => {
    setSelect(e.target.value);
}
 
    return (
        <div className="m-3">
            <select value={select} onChange={changed}>
                <option value="0">Nieko</option>
                <option value="1">Vienas</option>
                <option value="5">Penki</option>
                <option value="777">Daug</option>
            </select>
        </div>
    )
}

export default Select;