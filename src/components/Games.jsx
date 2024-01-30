import React from "react";
import "./Games.scss";

const Games = () => {
  return (
    <div className="games-container">
      <div className="games-title">
        <div>
          <h2 className="our">OUR</h2>
          <h2>GAMES</h2>
        </div>
        <button className="btn">view all games</button>
      </div>
      <div className="game-item-container">
        <div className="game-item">HyperLand</div>
        <div className="game-item">Arcave</div>
        <div className="game-item">Warfield</div>
      </div>
    </div>
  );
};

export default Games;
