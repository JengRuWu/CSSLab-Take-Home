import React from "react";
import Slider from "meteor/empirica:slider";
import CanvasDraw from "react-canvas-draw";

export default class TaskResponse extends React.Component {
  handleChange = num => {
    const { player, round } = this.props;
    const value = Math.round(num * 100) / 100;
    player.round.set("value", value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  renderSubmitted() {
    return <></>;
  }

  renderSlider() {
    const { player, stage } = this.props;
    const imagePath = stage.get("imagePath");
    const playingGame = stage.get("playingGame");
    const finalQuestion = stage.get("finalQuestion");
    console.log(imagePath);
    if(finalQuestion){
      return(
      <>{playingGame?
        <>
          <CanvasDraw imgSrc={imagePath} ref={canvasDraw => (this.saveableCanvas = canvasDraw)} brushColor="#ff0000" brushRadius="5"/>
          <button type="button" onClick={() => this.saveableCanvas.undo()}>Undo</button>
        </>
        :<></>}
      </>)
    }
    return (
      <>
        {playingGame?
        <>
          <CanvasDraw imgSrc={imagePath} ref={canvasDraw => (this.saveableCanvas = canvasDraw)} />
          <button type="button" onClick={() => this.saveableCanvas.undo()}>Undo</button>
        </>
        :<img src={imagePath} alt="" className="dot-ans"/>}
        
      </>
    );
  }

  render() {
    const { player, stage } = this.props;
    const playingGame = stage.get("playingGame");
    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {this.renderSlider()}

          <button type="submit">{playingGame?"Submit":"Ok"}</button>
        </form>
      </div>
    );
  }
}
