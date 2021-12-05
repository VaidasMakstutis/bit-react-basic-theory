import { Link, Outlet } from "react-router-dom";

function America() {
    return (
        <div className="america">
            <nav>
                <Link to="amazon">Amazon</Link>
                <Link to="eagle">Eagle</Link>
                <Link to="grizzlies">Grizzlies</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default America;