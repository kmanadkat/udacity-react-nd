import React from 'react'
import {connect} from 'react-redux'
import List from './List'
import {handleAddTodo, handleDeleteTodo, handleToggleTodo} from '../actions/todos'


class Todos extends React.Component{
  addItem = (event) => {
    event.preventDefault(); 
    this.props.dispatch(handleAddTodo(this.input.value, () => this.input.value = ''))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id));
  }

  render() {
    return (
      <div className="col-md-6">
        <h3>Todos</h3>
        <div className="form-group mt-4">
          <label htmlFor="">Add Todo</label>
          <input 
            type="text"
            className="form-control w-75"
            placeholder="Go for walk, grocery shopping.."
            ref={(input) => this.input = input}
          />
          <button
            className="btn btn-dark mt-3 mb-4"
            onClick={this.addItem}
            >Add Todos</button>
          <List 
            items={this.props.todos}
            remove={this.removeItem}
            toggle={this.toggleItem}
          />
        </div>
      </div>
    );
  }
}

const ConnectedTodos = connect((state) => ({
  todos: state.todos
}))(Todos)

export default ConnectedTodos
