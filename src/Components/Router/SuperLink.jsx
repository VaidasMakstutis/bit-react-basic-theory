import { Link, useResolvedPath, useMatch } from "react-router-dom";

function SuperLink({to, children}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link to={to}
        style={{
            color: match ? 'blueviolet' : 'crimson',
            border: match ? '1px solid blueviolet' : '1px solid transparent'
        }}
        >{children}</Link>
    )
}

export default SuperLink;