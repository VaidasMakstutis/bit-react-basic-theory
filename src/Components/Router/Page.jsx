import { Routes, Route } from "react-router";
import Africa from "./Africa";
import America from "./America";

function Page() {
    return (
        <Routes>
            <Route path="/" element={<h2>Welcome to home</h2>}></Route>
            <Route path="/australia" element={<h2>Welcome to Australia</h2>}></Route>
            <Route path="/africa" element={<Africa/>}>
                <Route path="tigers" element={<h2>101 Tigers</h2>}></Route>
                <Route path="lions" element={<h2>101 Lions</h2>}></Route>
                <Route path="behemots" element={<h2>101 Behemots</h2>}></Route>
            </Route>
            <Route path="/america" element={<America/>}>
                <Route path="amazon" element={<h2>101 Amazons</h2>}></Route>
                <Route path="eagle" element={<h2>101 Eagles</h2>}></Route>
                <Route path="grizzlies" element={<h2>101 Grizzlies</h2>}></Route>
            </Route>
            <Route path="*" element={<h2>404 Page not found</h2>}></Route>
        </Routes>
    )
}

export default Page;