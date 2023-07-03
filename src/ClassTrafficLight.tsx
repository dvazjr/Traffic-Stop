import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    lights: ["red", "black", "black"],
  };

  nextButton = () => {
    const lightColor = this.state.lights;

    if (lightColor[0] === "red") {
      lightColor[0] = "black";
      lightColor[1] = "black";
      lightColor[2] = "green";
    } else if (lightColor[2] === "green") {
      lightColor[0] = "black";
      lightColor[1] = "yellow";
      lightColor[2] = "black";
    } else if (lightColor[1] === "yellow") {
      lightColor[0] = "red";
      lightColor[1] = "black";
      lightColor[2] = "black";
    }

    this.setState({ lights: lightColor });
  };

  render() {
    const { lights } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {lights.map((light, index) => (
            <div className={`circle ${light}`} key={index}></div>
          ))}
        </div>
        <button className="next-state-button" onClick={this.nextButton}>
          Next State
        </button>
      </div>
    );
  }
}
