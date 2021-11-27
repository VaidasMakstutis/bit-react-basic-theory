import { useState } from "react";

function Checkbox(){

const [control, setControl] = useState({
    nr1: false,
    nr2: false,
    nr3: false,
    nr4: false,
    nr5: false,
});

const doControl = nr => {
    const controlCopy = {...control};
    controlCopy[nr] = !controlCopy[nr];
    setControl(controlCopy);
}
    
    return (
        <div className="m-3">
            <div className="nice-border" onClick={() => doControl('nr1')}>
                <span>Nr. 1</span><input type="checkbox" onChange={() => doControl('nr1')} checked={control.nr1}/>
            </div>
            <div className="nice-border" onClick={() => doControl('nr2')}>
                <span>Nr. 2</span><input type="checkbox" onChange={() => doControl('nr2')} checked={control.nr2}/>
            </div>
            <div className="nice-border" onClick={() => doControl('nr3')}>
                <span>Nr. 3</span><input type="checkbox" onChange={() => doControl('nr3')} checked={control.nr3}/>
            </div>
            <div className="nice-border" onClick={() => doControl('nr4')}>
                <span>Nr. 4</span><input type="checkbox" onChange={() => doControl('nr4')} checked={control.nr4}/>
            </div>
            <div className="nice-border" onClick={() => doControl('nr5')}>
                <span>Nr. 5</span><input type="checkbox" onChange={() => doControl('nr5')} checked={control.nr5}/>
            </div>
        </div>
    )
}

export default Checkbox;