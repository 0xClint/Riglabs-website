import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Connect.scss";
import Astronaut from "./Astronaut";
import { skyImg } from "../assets";

const Connect = () => {
  return (
    <div className="connect-outer-container">
      <div className="upper-round"></div>
      <div className="connect-container">
        <div className="connect-left">
          <h2>
            EXPLORE
            <br /> BUIDL & <br />
            COLLAB
          </h2>
          <p>
            We are open minded game studio who belives in collaboration and that
            working togethre can bring out more engaging games.
          </p>
          <button className="btn">Let's Connect</button>
        </div>
        <div className="connect-right">
          <div className="model-container">
            <img src={skyImg} />
            <div>
              <Canvas
                camera={{
                  position: [5, -5, 10],
                  fov: 30,
                }}
                style={{ transform: "translate(70px,50px)" }}
              >
                <ambientLight intensity={3} />
                <Astronaut />
                <OrbitControls autoRotate={1} />
              </Canvas>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
