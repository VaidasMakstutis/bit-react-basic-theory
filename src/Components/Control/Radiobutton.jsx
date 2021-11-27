import { useState } from "react";

function Radiobutton () {

const defaultRadio = [false, false, false, false, false, false];

const [radio, setRadio] = useState([false, false, true, false, false, false]);

const control = e => {
    const radioCopy = [...defaultRadio];
    const i = parseInt(e.target.value);
    radioCopy[i] = true;
    setRadio(radioCopy);
} 

    return (
        <div className="m-3">
            <input type="radio" name="radio" onChange={control} value="0" checked={radio[0]}></input>
            <input type="radio" name="radio" onChange={control} value="1" checked={radio[1]}></input>
            <input type="radio" name="radio" onChange={control} value="2" checked={radio[2]}></input>
            <input type="radio" name="radio" onChange={control} value="3" checked={radio[3]}></input>
            <input type="radio" name="radio" onChange={control} value="4" checked={radio[4]}></input>
            <input type="radio" name="radio" onChange={control} value="5" checked={radio[5]}></input>
        </div>
    )
}

export default Radiobutton;