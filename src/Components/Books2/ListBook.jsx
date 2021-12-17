import { useContext } from "react";
import { Link } from "react-router-dom";
import TypesContext from "../../Contexts/TypesContext";

function ListBook({ book }) {
    const types = useContext(TypesContext);
    return (
        <div className="books__list__book">
            <div className="books__list__book__type">
                {types.length ? types.filter(t => t.id === book.type)[0].title : 'Loading...'}
            </div>
            <div className="books__list__book__title">
                <Link to={'book/' + book.id}> {book.title}</Link>
            </div>
            <div className="books__list__book__img">
                <Link to={'book/' + book.id}>
                    <img src={book.img} alt={book.title}></img>
                </Link>
            </div>
            <div className="books__list__book__author">
                {book.author}
            </div>
            <div className="books__list__book__price">
                <button className="button pink">Pirkti</button>
                <span>{book.price} &euro;</span>
            </div>
        </div>
    )
}

export default ListBook;