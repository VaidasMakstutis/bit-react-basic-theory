import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { actionGetAllFromServer, actionSelectorDidChanged } from "./Actions/books";
import BooksContext from "./Contexts/BooksContext";
import List from "./Components/Books2/List";
import NotFound from "./Components/Books2/NotFound";
import booksReducer from "./Reducers/booksReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sort from "./Components/Books2/Sort";
import SelectorsContext from "./Contexts/SelectorsContext";
import TypesContext from "./Contexts/TypesContext";
import Filter from "./Components/Books2/Filter";
import Pager from "./Components/Books2/Pager";
export const BOOKS_PER_PAGE = 2;

function App() {

    
    const [books, dispachBooks] = useReducer(booksReducer, { 
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

    useEffect(() => {
        dispachBooks(actionSelectorDidChanged(selectors));
    }, [selectors])

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                dispachBooks(actionGetAllFromServer(res.data))
            })
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
            .then(res => {
                setTypes(res.data);
            })
    }, []);


    return (
        <BooksContext.Provider value={books}>
            <SelectorsContext.Provider value={setSelectors}>
                <TypesContext.Provider value={types}>
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
                </TypesContext.Provider>
            </SelectorsContext.Provider>
        </BooksContext.Provider>
    )
}

export default App;