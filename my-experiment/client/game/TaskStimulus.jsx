import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const { stage, player } = this.props;
    const imagePath = stage.get("imagePath");
    const questionText = stage.get("questionText");

    return (
      <div className="task-stimulus">
        {questionText}
      </div>
    );
  }
}
