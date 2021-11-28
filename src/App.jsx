import { useEffect, useRef, useState } from "react";

function App () {

    console.log('App TOP run');

    const [color, setColor] = useState('#777');
    const [size, setSize] = useState('20px');
    // const [first, setFirst] = useState('true');

    const first = useRef(true);  // Default value
 
    useEffect(() => {
        if (!first.current) {
            console.log('App effect COLOR run');
        } else {
            first.current = false;
        }
    }, [color]);

    useEffect(() => {
        console.log('App effect SIZE run');
    }, [size]);

    useEffect(() => {
        console.log('App effect BOTH run');
    }, [color, size]);

    useEffect(() => {
        console.log('App effect READY run');
    }, []);

    const randomColor = () => {
        setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    }
    
    const randomSize = () => {
        const [maximum, minimum] = [50, 20];
        setSize(Math.floor((Math.random() * (maximum - minimum + 1)) + minimum) + 'px');
    }

    return (
        <div className="app col">
            <h1 style={{
                color: color,
                fontSize: size
            }}>SEKMADIENIS</h1>
            <button className="button" onClick={randomColor}>Random color</button>
            <button className="button" onClick={randomSize}>Random size</button>
        </div>
    )
}

export default App;