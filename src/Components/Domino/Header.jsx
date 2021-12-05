import Sort from "./Sort";
import Filter from "./Filter";

function Header({clientSort, clientFilter, serverFilter, serverSort, plates}) {
    return (
        <div className="domino_header">
            <h1>Domino</h1>
            <Sort clientSort={clientSort} serverSort={serverSort} plates={plates}></Sort>
            <Filter clientFilter={clientFilter} serverFilter={serverFilter} plates={plates}></Filter>
        </div>
    )
}

export default Header;