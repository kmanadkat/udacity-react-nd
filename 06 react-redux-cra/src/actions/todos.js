import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

const addTodo = (todo) => ({type: ADD_TODO, todo});
const removeTodo = (id) => ({type: REMOVE_TODO, id});
const toggleTodo = (id) => ({type: TOGGLE_TODO, id});

export function handleAddTodo(name, cb){
  return dispatch => {
    return API.saveTodo(name)
    .then((todo) =>{
      dispatch(addTodo(todo))
      cb();
    })
    .catch(()=>{
      alert('There was an error, try again.');
    });
  }
}

export function handleDeleteTodo(todo){
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id)
    .catch(() =>{
      dispatch(addTodo(todo));
      alert("An Error occured, try again")
    });
  }
}

export function handleToggleTodo(id){
  return (dispatch) => {
    dispatch(toggleTodo(id));
    return API.saveTodoToggle(id)
      .catch(() =>{
        dispatch(toggleTodo(id));
        alert("An Error occured, try again")
      })
  }
}
