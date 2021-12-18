import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { actionGetAllFromServer, actionGetAllLikes, actionSelectorDidChanged } from "./Actions/books";
import BooksContext from "./Contexts/BooksContext";
import List from "./Components/Books2/List";
import NotFound from "./Components/Books2/NotFound";
import booksReducer from "./Reducers/booksReducer";
import likesReducer from "./Reducers/likesReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sort from "./Components/Books2/Sort";
import SelectorsContext from "./Contexts/SelectorsContext";
import TypesContext from "./Contexts/TypesContext";
import LikesContext from "./Contexts/LikesContext";
import Filter from "./Components/Books2/Filter";
import Pager from "./Components/Books2/Pager";
export const BOOKS_PER_PAGE = 4;

function App() {
   
    const [books, dispatchBooks] = useReducer(booksReducer, { 
        showBooks: [],
        masterBooks: [],
        showPages: [] 
    });
    const [selectors, setSelectors] = useState({
        sort: '',
        filter: 0,
        page: 0
    });
    const [types, setTypes] = useState([]);

    const [likes, dispatchLikes] = useReducer(likesReducer, [])

    const lastUpdate = useRef(0);

    useEffect(() => {
        dispatchBooks(actionSelectorDidChanged(selectors));
    }, [selectors])

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                dispatchBooks(actionGetAllFromServer(res.data))
            })
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
            .then(res => {
                setTypes(res.data);
            })
    }, []);

    useEffect(() => {
        dispatchLikes(actionGetAllLikes());
    }, []);

    // sync client ==> server
    useEffect(() => {
        setInterval(()=> {
            const data = {
                time: localStorage.getItem('likedTime'),
                likes: localStorage.getItem('likedBooks')
            }

            if (data.time !== null 
                && data.likes !== null
                && lastUpdate.current !== data.time) {
                axios.put('http://localhost:3003/update-likes', data);
                lastUpdate.current = data.time;
            }
        },5000)
    }, []);


    return (
        <BooksContext.Provider value={books}>
            <SelectorsContext.Provider value={setSelectors}>
                <TypesContext.Provider value={types}>
                    <LikesContext.Provider value={{
                        likes:likes, 
                        dispatch:dispatchLikes
                        }}>
                    <BrowserRouter>
                        <div className="App col top">
                            <div className="books">
                                <h1>Knygynas</h1>
                                <div className="books__selectors">
                                    <Sort></Sort>
                                    <Filter></Filter>
                                    <Pager pages={books.showPages}></Pager>
                                </div>

                                <Routes>
                                    <Route path="/" element={<List></List>}></Route>
                                    <Route path="*" element={<NotFound></NotFound>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </BrowserRouter>
                    </LikesContext.Provider>
                </TypesContext.Provider>
            </SelectorsContext.Provider>
        </BooksContext.Provider>
    )
}

export default App;