import React from 'react'
import FormWrapper from './FormWrapper'
import GamersListWrapper from './GamersListWrapper'

class MainWrapper extends React.Component{
  state = {
    players: [],
  }
  addNewPlayer = (player) => {
    this.setState({
      players: [...this.state.players, player]
    })
  }
  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 pt-3 pb-4">
          <FormWrapper players={this.state.players} addNewPlayer={this.addNewPlayer} />
          <GamersListWrapper players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default MainWrapper;