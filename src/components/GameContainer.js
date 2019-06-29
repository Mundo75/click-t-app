import React, {Component} from "react";
import Game from "./Game";
import Mrt from "./../mrt.json";
import shuffle from "shuffle-array";

class GameContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 1,
            mrt: Mrt,
            selectedMrt: []
        };
    }

   
    handleClick = event => {

        let id = event.target.id;
        let exists = false;

        this.state.selectedMrt.forEach(mrt => {

            if(mrt.id === id) {
                exists = true;
            };
        });

        if(exists) {
            this.endGame();

        } else {
            this.state.mrt.forEach(mrt => {

                if(mrt.id === id) {
                    this.setState({selectedMrt: [...this.state.selectedMrt, mrt]});
                    console.log(this.state.selectedMrt);

                    this.updateScore();
                };
            });
        };

        this.setState({ mrt: shuffle(this.state.mrt)});
        console.log("Suffling Mr. Ts");
    };

    updateScore = () => {
        this.setState({score: this.state.score + 1});
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    };

    endGame = () => {
        console.log("End!");

        this.props.updateTopScore(this.state.score);
        this.setState({score: 1, selectedMrt: []});
        this.props.updateCurrentScore(0);
    };

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Mrt.map(mrt => 
                        <Game src={mrt.image} 
                              key={mrt.id}
                              id={mrt.id} 
                              alt={mrt.name} 
                              endGame={this.endGame} 
                              handleClick={this.handleClick} 
                              score={this.state.score} />)};
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    };
};

export default GameContainer;

