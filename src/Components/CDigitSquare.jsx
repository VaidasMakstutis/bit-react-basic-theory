import React from "react";

class DigitSquare extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: this.props.number};
  }

  increaseNumber = () => {
    //Incorrect way

    // this.setState({
    //   number: this.state.number + 1
    // })

    
    //Correct way

    this.setState((state) => ({
      number: state.number + 1
    }));
  }

  render() {
    return <div className="big-blue_small_digit" onClick={this.increaseNumber}>
                {this.state.number}
          </div>;
  }
}

export default DigitSquare;
