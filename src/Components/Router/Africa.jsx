import { Link, Outlet } from "react-router-dom";

function Africa() {
    return (
        <div className="africa">
            <nav>
                <Link to="tigers">Tigers</Link>
                <Link to="lions">Lions</Link>
                <Link to="behemots">Behemots</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Africa;