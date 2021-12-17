import { useContext, useState } from "react";
import SelectorsContext from "../../Contexts/SelectorsContext";

function Sort() {

    const selectors = useContext(SelectorsContext);
    const [select, setSelect] = useState('');
    
    const handleChange = e => {
        setSelect(e.target.value);
        selectors( prev => ({...prev, sort: e.target.value}));
    }

    return (
        <div className="books__selectors__sort">
            <select value={select} onChange={handleChange}>
                <option value=''>Rūšiavimas</option>
                <option value='price_asc'>Kaina pirma mažiausia</option>
                <option value='price_desc'>Kaina pirma didžiausia</option>
                <option value='title_asc'>Pavadinimas AZ</option>
                <option value='title_desc'>Pavadinimas ZA</option>
            </select>
        </div>
    )
}

export default Sort;