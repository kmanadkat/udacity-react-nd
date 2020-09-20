import React from 'react';
import PropTypes from 'prop-types';

class FormWrapper extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    username: '',
  }

  static propTypes = {
    players: PropTypes.array.isRequired,
    addNewPlayer: PropTypes.func.isRequired,
  }

  handleInputChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {players, addNewPlayer} = this.props;
    const playerIndex = players.filter(player => player.username === this.state.username);
    if(playerIndex.length !== 0){
      this.showAlert("alert-danger", "Username already exists, please choose another");
    }else{
      addNewPlayer({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        gamesPlayed: 0,        
      });
      this.setState({firstName: '', lastName: '', username: ''});
      this.showAlert("alert-success", "New user is added successfully");
    }
  }

  showAlert = (alertType, alertText) => {
    const alertMsg = document.getElementById('alertMsg');
    if(alertMsg.classList.contains("d-none")) alertMsg.classList.remove("d-none");
    if(!alertMsg.classList.contains(alertType)) alertMsg.classList.add(alertType);
    alertMsg.innerText = alertText;
    setTimeout(() =>{
      alertMsg.classList.add("d-none");
      alertMsg.classList.remove(alertType);
    }, 3000)
  }

  render() {
    return (
      <div className="col-md-5 pt-5">
        <form onSubmit={this.handleSubmit} className="pr-md-5">
          <h4>Register New Player</h4>
          <div className="row mt-4 pt-3">
            <div className="col">
              <input 
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                value={this.state.firstName} 
                onChange={this.handleInputChange}
                required={true} />
            </div>
            <div className="col">
              <input 
                type="text"
                className="form-control"
                placeholder="Last name" 
                name="lastName"
                value={this.state.lastName} 
                onChange={this.handleInputChange}
                required={true} />
            </div>
          </div>
          <input 
            type="text"
            className="form-control mt-4"
            placeholder="Username" 
            name="username"
            value={this.state.username} 
            onChange={this.handleInputChange}
            required={true} />
          <small id="emailHelp" className="form-text text-muted">Your username should be unique.</small>
          <button className="btn btn-success mt-4">Register</button>
          <div className="alert mt-4 d-none" id="alertMsg" role="alert"></div>
        </form>
      </div>
    );
  }
}

export default FormWrapper;