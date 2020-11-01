import React from 'react'
import {connect} from 'react-redux'
import List from './List'

import {handleAddGoal, handleDeleteGoal} from '../actions/goals'

class Goals extends React.Component{
  addItem = (event) => {
    event.preventDefault();
    this.props.dispatch(handleAddGoal(this.input.value, () => this.input.value = ''));
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }
  render() {
    return (
      <div className="col-md-6">
        <h3>Goals</h3>
        <div className="form-group mt-4">
          <label htmlFor="">Add Goal</label>
          <input 
            type="text" 
            className="form-control w-75"
            placeholder="Learn Redux, Lose 8kgs in 2 months.."
            ref={(input) => this.input = input} />
          <button className="btn btn-dark mt-3 mb-4"
            onClick={this.addItem}>Add Goal</button>
          <List items={this.props.goals} remove={this.removeItem}/>
        </div>
      </div>
    )
  }
}

const ConnectedGoals = connect((state) => ({
  goals: state.goals
}))(Goals)

export default ConnectedGoals