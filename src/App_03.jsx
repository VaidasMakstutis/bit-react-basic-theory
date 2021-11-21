import React from "react";
import SmallSquare from "./Components/CSmallSquare";
import digitSquares from "./Data/digitSquares";

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {border: 'yellow'};
  }

  handleClick = () => {
    this.setState({
      border: '#'+ Math.floor(Math.random()*16777215).toString(16)
    })
    console.log(this.state.border)
  }

  render() {
    return (
      <div className="App">
        <div className="big-blue" style={{borderColor: this.state.border}}>
          <div className="big-blue_button">
            <button className="button" onClick={this.handleClick}>I am Nice</button>
          </div>
          <SmallSquare color={"crimson"} number={5} />
          <SmallSquare color={"orange"} number={7} />
          <SmallSquare color={"lime"} number={8} />
          <SmallSquare color={"brown"} number={19} />
        </div>
        <div className="big-blue">
          {digitSquares.map((s, i) => (
            <SmallSquare key={i} color={s.color} number={s.number} />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
