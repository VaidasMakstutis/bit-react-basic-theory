import TextInput from "./Components/Control/TextInput";
import Select from "./Components/Control/Select";
import Textarea from "./Components/Control/Textarea";
import Checkbox from "./Components/Control/Checkbox";
import Radiobutton from "./Components/Control/Radiobutton";
import { useState } from "react";
import ShowText from "./Components/Control/ShowText";

function App (){

    const [showText, setShowText] = useState('nothing...');
    
    const whatText = (text) => {
        setShowText(text);
    }

    return (
        <div className="App col">
            <form>
            <ShowText text={showText}/>
            <TextInput whatText={whatText}/>
            <Select/>
            <Textarea/>
            <Checkbox/>
            <Radiobutton/>
            </form>
        </div>
    )
}

export default App;