import Plate from "./Plate";

function Bag ({plates}) {
    return (
        <div className="domino-bag">
            {
                plates.map((p, i) => <Plate key={i} plate={p}/>)
            }
        </div>
    )
}

export default Bag;