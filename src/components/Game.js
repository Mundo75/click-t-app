import React from "react";
import "../App.css";

const Game = props => (
    <div className="col-md-3">
        <div className="card-mb-5" id="game">
            <img className="card-img-top gamePic" src={props.src} alt={props.alt} onClick={props.handleClick} id={props.id}/>

        </div>

    </div>
);

export default Game;
 