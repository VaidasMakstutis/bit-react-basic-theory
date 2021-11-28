import Half from "./Half";

function Plate({plate}) {
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