import Children2 from "./Children2";

function Children1({say}) {
    return (
        <div className="children nr1">
            <Children2 say={say} />
        </div>
    )
}

export default Children1;