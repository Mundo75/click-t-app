import React, { Component} from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";

class App extends Component {

        state = {
        count: 0,
        topScore: 0
    };

    updateCurrentScore = (newCount) => {
        this.setState({count: newCount});
    };

    updateTopScore = (newTop) => {

        if(newTop > this.state.topScore) {
            this.setState({topScore: newTop - 1});
        };
    };

    render() {
        return (
            <div>
                <Navbar score={this.state.count} top={this.state.topScore}/>
                <Header/>
                <GameContainer updateCurrentScore={this.updateCurrentScore} updateTopScore={this.updateTopScore}/>
            </div>
        );
    };
 };

 export default App;
