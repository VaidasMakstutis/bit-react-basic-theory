import DigitSquare from "./DigitSquare";

function SmallSquare ({color, number}) {
    return (
        <div className="big-blue_small" style={{
            borderColor: color
        }}>
            <DigitSquare number={number} />
        </div>
    )
}

export default SmallSquare;