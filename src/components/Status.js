import React, { Component } from "react";
import Player from "./ChoosePlayer";

class Status extends Component {
    handleSetPlayer(e) {
        this.props.setPlayer(e);
    }
    renderHtml() {
        if (this.props.winner) {
            return <h3 className="player-is">Winner is {this.props.winner}</h3>;
        } else {
            return this.props.player ? (
                <h3 className="player-is">Next player is {this.props.player}</h3>
            ) : (
                <Player player={(e) => this.handleSetPlayer(e)} />
            );
        }
    }
    render() {
        return <span>{this.renderHtml()}</span>;
    }
}

export default Status;
