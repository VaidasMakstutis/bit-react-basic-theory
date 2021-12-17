import { useContext, useState } from "react";
import SelectorsContext from "../../Contexts/SelectorsContext";

function Pager({pages}) {

    const selectors = useContext(SelectorsContext);
    const [select, setSelect] = useState('');
    
    const handleChange = e => {
        setSelect(e.target.value);
        selectors( prev => ({...prev, page: e.target.value}));
    }

    return (
        <div className="books__selectors__sort">
            <select value={select} onChange={handleChange}>
                <option value="0">Rodyti visus</option>
                {
                    pages.map(p => <option key={p} value={p}>-- {p} --</option>)
                }
            </select>
        </div>
    )
}

export default Pager;