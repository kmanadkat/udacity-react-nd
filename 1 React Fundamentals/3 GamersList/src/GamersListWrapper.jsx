import React from 'react'
import PropTypes from 'prop-types';

class GamersListWrapper extends React.Component{
  state = {
    isVisible: true,
  }

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  toggleVisibility = (event) => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible}))
  }

  render(){
    const {players} = this.props;
    return (
      <div className="col-md-7 pt-4 mt-3 pl-md-5 border-left">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="my-0">Game Players List</h4>
          <button className="btn btn-link my-0" onClick={this.toggleVisibility}>
            {this.state.isVisible ? "Hide Game Plays" : "Show Game Plays"}
          </button>
        </div>
        <div className="cardsWrapper d-flex flex-column align-items-center mt-3" style={{overflowY : "scroll"}}>
          {
            players.map((player) => (
              <div className="card w-75 mt-3" key={player.username}>
                <div className="card-body">
                  <h5 className="card-title">{player.username}</h5>
                  <p className="card-text">
                    {player.firstName} {player.lastName} {this.state.isVisible && <span>has played {player.gamesPlayed} games</span>}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default GamersListWrapper;