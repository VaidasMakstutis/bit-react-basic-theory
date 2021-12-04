import Half from "./Half";

function Plate({plate, showModal}) {
    if(showModal) {
    return (
        <div className="plate" onClick={()=>showModal(plate)}>
            <div className="left-half">
                <Half dots={plate.left}/>
            </div>
            <div className="right-half">
                <Half dots={plate.right}/>
            </div>
        </div>
    )
    }


    return (
        <div className="plate">
            <div className="left-half">
                <Half dots={plate.left}/>
            </div>
            <div className="right-half">
                <Half dots={plate.right}/>
            </div>
        </div>
    )

}

export default Plate;