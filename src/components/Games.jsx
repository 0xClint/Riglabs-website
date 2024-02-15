import React, { useState } from "react";
import "./Games.scss";
import { arcaveGame, hyperlandGame, warfieldGame } from "../assets";

const Games = () => {
  const [text, setText] = useState("view all games");

  const handleClick = () => {
    setText("comming Soon!");
    setTimeout(() => {
      setText("view all games");
    }, 2000);
  };
  return (
    <div className="games-outer-container" id="games">
      <div className="upper-round"></div>
      <div className="games-container">
        <div className="games-title">
          <div>
            <h2 className="our">OUR </h2>
            <h2>GAMES</h2>
          </div>
          <button className="btn" onClick={() => handleClick()}>
            {text}
          </button>
        </div>
        <div className="game-item-container">
          <div className="alertLine">
            <marquee className="marquee">
              MVP COMING SOON! * MVP COMING SOON! * MVP COMING SOON!
            </marquee>
          </div>
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
