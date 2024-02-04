import React from "react";
import "./Games.scss";
import { arcaveGame, hyperlandGame, warfieldGame } from "../assets";

const Games = () => {
  return (
    <div className="games-outer-container">
      <div className="upper-round"></div>
      <div className="games-container">
        <div className="games-title">
          <div>
            <h2 className="our">OUR </h2>
            <h2>GAMES</h2>
          </div>
          <button className="btn">view all games</button>
        </div>
        <div className="game-item-container">
          <a
            className="game-item"
            href="https://devfolio.co/projects/hyperland-da6b"
            target="_blank"
          >
            <img src={hyperlandGame}></img>
            <div>HyperLand</div>
          </a>
          <a
            className="game-item"
            href="https://devfolio.co/projects/arcave-e8c0"
            target="_blank"
          >
            <img src={arcaveGame}></img>
            <div>Arcave</div>
          </a>
          <a
            className="game-item"
            href="https://devfolio.co/projects/warfield-fd85"
            target="_blank"
          >
            <img src={warfieldGame}></img>
            <div>Warfield</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Games;
