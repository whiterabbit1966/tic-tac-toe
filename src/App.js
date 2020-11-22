import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

import Status from "./components/Status";

import "./styles/index.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            player: null,
            winner: null,
        };
    }

    componentDidMount() {
        window.onload = () => {
            let title = document.querySelector(".title");
            title.classList.add("container--moving");

            let changeTheme = document.querySelector(".change-theme");
            changeTheme.classList.add("container--moving");

            let formChoosePlayer = document.querySelector(".form-choose-player");
            formChoosePlayer.classList.add("container--moving");

            let board = document.querySelector(".board");
            board.classList.add("container--moving");

            let instructionTitle = document.querySelector(".instruction__title");
            instructionTitle.classList.add("container--moving");

            let img = document.querySelector(".instruction__img");
            img.classList.add("container--moving");
        };
    }

    checkWinner() {
        let winLines = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"],
        ];
        this.checkMatch(winLines);
    }

    checkMatch(winLines) {
        for (let index = 0; index < winLines.length; index++) {
            const [a, b, c] = winLines[index];
            let board = this.state.board;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                alert(`You ( ${this.state.player} ) won`);
                this.setState({
                    winner: this.state.player,
                });
                location.reload();
            }
        }
    }

    handleClick(index) {
        if (this.state.player && !this.state.winner) {
            let newBoard = this.state.board;
            if (this.state.board[index] === null) {
                newBoard[index] = this.state.player;
                this.setState({
                    board: newBoard,
                    player: this.state.player === "X" ? "O" : "X",
                });
                this.checkWinner();
            }
        }
    }

    setPlayer(player) {
        this.setState({ player });
    }

    renderBoxes() {
        return this.state.board.map((box, index) => (
            <div className="box" key={index} onClick={() => this.handleClick(index)}>
                {box}
            </div>
        ));
    }

    reset() {
        let reset = document.querySelector(".reset");
        reset.style.display = "none";
        location.reload();
        // this.setState({
        //     player: null,
        //     winner: null,
        //     board: Array(9).fill(null),
        // });
    }

    changeTheme() {
        let theme = document.querySelector(".container");
        theme.classList.toggle("container--change-theme");

        let ball = document.querySelector(".ball");
        ball.classList.toggle("ball-moving");
        ball.style.display = "block";

        function none() {
            ball.style.display = "none";
        }
        setTimeout(none, 300);

        function themeChanged() {
            ball.classList.add("ball-white");
        }
        setTimeout(themeChanged, 300);
    }
    render() {
        return (
            <div className="container">
                <div className="pop-up"></div>

                <div className="ball" />

                <button onClick={this.changeTheme} className="change-theme">
                    Change theme
                </button>

                <h1 className="title">Tic Tac Toe</h1>

                <button className="reset" onClick={() => this.reset()}>
                    Reset
                </button>

                <Status
                    player={this.state.player}
                    setPlayer={(e) => {
                        this.setPlayer(e);
                    }}
                    winner={this.state.winner}
                />

                <div className="board">{this.renderBoxes()}</div>

                <div className="instruction">
                    <h2 className="instruction__title">
                        Never played? You need here
                        <FontAwesomeIcon
                            className="font-awesome-icon"
                            icon={faArrowCircleDown}
                        />
                    </h2>
                    <img className="instruction__img" src="img/instruction.jpg" />
                </div>
            </div>
        );
    }
}

export default App;
