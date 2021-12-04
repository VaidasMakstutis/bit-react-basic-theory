import Plate from "./Plate";

function Bag ({plates, showModal}) {
    return (
        <div className="domino-bag">
            {
                plates.map((p, i) => <Plate showModal={showModal} key={i} plate={p}/>)
            }
        </div>
    )
}

export default Bag;