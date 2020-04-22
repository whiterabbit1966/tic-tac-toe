import React, { Component } from "react";

class Player extends Component {
    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value);
        let reset = document.querySelector(".reset");
        reset.style.display = "block";
    }
    render() {
        return (
            <form className="form-choose-player" onSubmit={(e) => this.handleForm(e)}>
                <div className="players">
                    <h2>Choose player</h2>
                    <label className="label">
                        <span>Player X</span>
                        <input className="radio" type="radio" name="player" value="X" />
                        <span className="checkmark" />
                    </label>
                    <label className="label">
                        <span>Player O</span>
                        <input className="radio" type="radio" name="player" value="O" />
                        <span className="checkmark" />
                    </label>
                </div>
                <input type="submit" value="Start" />
            </form>
        );
    }
}

export default Player;
