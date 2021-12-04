import Sort from "./Sort";
import Filter from "./Filter";

function Header({clientSort, clientFilter, serverSort, plates}) {
    return (
        <div className="domino_header">
            <h1>Domino</h1>
            <Sort clientSort={clientSort} serverSort={serverSort} plates={plates}></Sort>
            <Filter clientFilter={clientFilter} plates={plates} clientFilter={clientFilter}></Filter>
        </div>
    )
}

export default Header;