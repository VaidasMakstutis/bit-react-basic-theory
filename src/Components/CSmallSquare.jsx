import React from "react";
import DigitSquare from "./CDigitSquare";

class SmallSquare extends React.Component {

//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div
        className="big-blue_small"
        style={{
          borderColor: this.props.color
        }}
      >
        <DigitSquare number={this.props.number} />
      </div>
    )
  }
}

export default SmallSquare;
