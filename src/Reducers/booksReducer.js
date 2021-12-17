import { BOOKS_PER_PAGE } from "../App";
import shuffleArray from "../Commons/shuffleArray";
import { GET_ALL_FROM_SERVER, SELECTOR_DID_CHANGED } from "../Constants/bookActions";

function booksReducer(state, action) {
    let books = {...state };
    // Main
    switch (action.type) {
        case GET_ALL_FROM_SERVER:
            books = {
                showBooks: [...action.payload],
                masterBooks: [...action.payload],
            };
            break;
        default:
    }


    // Filters
    switch (action.type) {
        case SELECTOR_DID_CHANGED:
            if (parseInt(action.payload.filter)) {
                books = {
                    ...books,
                    showBooks: books.masterBooks.filter(b => b.type === parseInt(action.payload.filter)),
                }
            } else {
                books = {
                    ...books,
                    showBooks: books.masterBooks
                }

            }
            break;
        default:
            books = {
                ...books,
                showBooks: books.masterBooks
            }
    }



    // Sort
    switch (action.type) {
        case SELECTOR_DID_CHANGED:
        case GET_ALL_FROM_SERVER:
            switch (action.payload.sort) {
                case 'price_asc':
                    books = {
                        ...books,
                        showBooks: books.showBooks.sort((a, b) => a.price - b.price)
                    }
                    break;
                case 'price_desc':
                    books = {
                        ...books,
                        showBooks: books.showBooks.sort((a, b) => b.price - a.price)
                    }
                    break;
                case 'title_asc':
                    books = {
                        ...books,
                        showBooks: books.showBooks.sort((a, b) => {
                            const titleA = a.title.toUpperCase();
                            const titleB = b.title.toUpperCase();
                            if (titleA < titleB) {
                                return -1;
                            }
                            if (titleA > titleB) {
                                return 1;
                            }
                            return 0;
                        })
                    }
                    break;
                case 'title_desc':
                    books = {
                        ...books,
                        showBooks: books.showBooks.sort((a, b) => {
                            const titleA = a.title.toUpperCase();
                            const titleB = b.title.toUpperCase();
                            if (titleA < titleB) {
                                return 1;
                            }
                            if (titleA > titleB) {
                                return -1;
                            }
                            return 0;
                        })
                    }
                    break;
                default:
                    books = {
                        ...books,
                        showBooks: shuffleArray(books.showBooks)
                    }
            }
            break;
        default:
    }


    // Pager
    switch (action.type) {
        case GET_ALL_FROM_SERVER:
        case SELECTOR_DID_CHANGED:
            const pages = [];
            for (let i = 0; i < Math.ceil(books.showBooks.length / BOOKS_PER_PAGE); i++) {
                pages.push(i + 1);
            }
            let show;
            let copy;
            if (parseInt(action.payload.page)) {
                let showPageNo = parseInt(action.payload.page);
                showPageNo--;
                copy = [...books.showBooks];
                show = copy.splice(showPageNo * BOOKS_PER_PAGE, BOOKS_PER_PAGE);
                if (show.length === 0) {
                    copy = [...books.showBooks];
                    // show = copy.splice(0, BOOKS_PER_PAGE); // pirmas puslapis
                    show = copy; // viskas

                }
            } else {
                show = books.showBooks;
            }
            books = {
                ...books,
                showBooks: show,
                showPages: pages
            };
            break;
        default:
    }


    return books;
}

export default booksReducer;