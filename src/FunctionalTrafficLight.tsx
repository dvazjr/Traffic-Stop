import { useState } from "react";

export const FunctionalTrafficLight = () => {

  const [lights, setLights] = useState(["red", "black", "black"]);

  const nextButton = () => {
    if (lights[0] === "red") {
      setLights(["black", "black", "green"]);
    } else if (lights[1] === "yellow") {
      setLights(["red", "black", "black"]);
    } else if (lights[2] === "green") {
      setLights(["black", "yellow", "black"]);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {lights.map((light, index) => (
            <div className={`circle ${light}`} key={index}></div>
          ))}
      </div>
      <button className="next-state-button" onClick={nextButton}>Next State</button>
    </div>
  );
};



