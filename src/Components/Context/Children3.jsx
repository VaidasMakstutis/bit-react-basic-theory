import { useContext } from "react";
import All from "../../Contexts/All";

function Children3({say}) {

    const say2 = useContext(All);
    
    return (
        <div className="children nr3">
            <span>{say}</span>
            <span>{say2}</span>
        </div>
    )
}

export default Children3;