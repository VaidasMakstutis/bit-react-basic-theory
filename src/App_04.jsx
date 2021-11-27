import React from "react";
import axios from "axios";
import Book from "./Components/Book";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    axios.get('https://in3.dev/knygos/')
    .then(res => {
      this.setState({books: res.data})
      console.log(res.data);
    })
  }

  render() {
    if (this.state.books.length) {
      return (
        <div className="App">
          <div className="big-blue big">
            {
              this.state.books.map(b => <Book key={b.id} book={b} />)
            }
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="big-blue">
            <span>LOADING...</span>
          </div>
        </div>
      );
    }
  }
}

export default App;
