import { HashRouter as Router, Link } from "react-router-dom";
import Page from "./Components/Router/Page";

function App () {
    return (
        <Router>
        <div className="App go col top">
        <h1>Hello</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/australia">Australia</Link>
            <Link to="/africa">Africa</Link>
            <Link to="/america">America</Link>  
        </nav>
        <Page />
        </div>
        </Router>
    )
}

export default App;