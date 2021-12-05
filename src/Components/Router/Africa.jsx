import { Outlet } from "react-router-dom";
import SuperLink from "./SuperLink";

function Africa() {
    return (
        <div className="africa">
            <nav>
                <SuperLink to="tigers" children="Tigers"></SuperLink>
                <SuperLink to="lions" children="Lions"></SuperLink>
                <SuperLink to="behemoths/0" children="Behemoths">Behemoths</SuperLink>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Africa;