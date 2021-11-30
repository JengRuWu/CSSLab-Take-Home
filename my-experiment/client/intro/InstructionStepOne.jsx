import React from "react";
import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.onNext();
  };
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const solutionShape = "/experiment/images/solutionShape.png";
    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions </h1>
          <div>
            <p> Please remember the shape. It has three lines that formed a triangle and a fourth line that cut the triangle in half.</p> 
            <img src={solutionShape} alt="" className="solution-shape"/>
            <p> You would need it for the next exercises.</p>
          </div>
          <p>
            <button type="button" onClick={this.handleSubmit}>
              Start
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
