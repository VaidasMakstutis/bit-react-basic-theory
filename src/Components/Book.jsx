import React from "react";

class Book extends React.Component {

    render() {
        return (
            <div className="big-blue_book">
                <small>{this.props.book.title}</small>
                <img src={this.props.book.img} alt=""/>
            </div>
        )
    }
}

export default Book;