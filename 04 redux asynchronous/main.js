function generateId () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

// App Code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const RECEIVE_DATA = 'RECEIVE_DATA';

// Action Creators
const addTodoAction = (todo) => ({type: ADD_TODO, todo});
const removeTodoAction = (id) => ({type: REMOVE_TODO, id});
const toggleTodoAction = (id) => ({type: TOGGLE_TODO, id});
const addGoalAction = (goal) => ({type: ADD_GOAL, goal});
const removeGoalAction = (id) => ({type: REMOVE_GOAL, id});
const receiveDataAction = (todos, goals)  => ({type: RECEIVE_DATA, todos, goals});

function handleDeleteTodo(todo){
  return (dispatch) => {
    dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id)
    .catch(() =>{
      dispatch(addTodoAction(todo));
      alert("An Error occured, try again")
    });
  }
}

function handleAddGoal(name, cb){
  return (dispatch) => {
    return API.saveGoal(name)
    .then(goal => {
      dispatch(addGoalAction(goal));
      cb();
    })
    .catch(()=>{
      alert('There was an error, please try again');
    })
  }
}

function handleAddTodo(name, cb){
  return dispatch => {
    return API.saveTodo(name)
    .then((todo) =>{
      dispatch(addTodoAction(todo))
      cb();
    })
    .catch(()=>{
      alert('There was an error, try again.');
    });
  }
}

function handleToggleTodo(id){
  return (dispatch) => {
    dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id)
      .catch(() =>{
        dispatch(toggleTodoAction(id));
        alert("An Error occured, try again")
      })
  }
}

function handleDeleteGoal(goal){
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id)
    .catch(() =>{
      dispatch(addGoalAction(goal));
      alert("An Error occured, try again")
    })
  }
}

function handleInitialData(){
  return dispatch => {
    Promise.all([
      API.fetchGoals(),
      API.fetchTodos()
    ])
    .then( ([goals, todos]) => {
      dispatch(receiveDataAction(todos, goals));
    })
  }
}

function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO :
      return state.map((todo) => todo.id !== action.id ? todo :
        Object.assign({}, todo, { complete: !todo.complete }))
    case RECEIVE_DATA:
      return action.todos
    default :
      return state
  }
}

function goals (state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal])
    case REMOVE_GOAL :
      return state.filter((goal) => goal.id !== action.id)
    case RECEIVE_DATA:
      return action.goals
    default :
      return state
  }
}

function loading(state = true, action){
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

// Middleware
const checker = (store) => (next) => (action) => {
  if(action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')){
    return alert("Nope. That's a bad idea");
  }
  if(action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')){
    return alert("Nope. That's a bad idea");
  }
  return next(action);
}

// Middleware
const logger = (store) => (next) => (action) => {
  console.group(action.type);
    console.log('The action: ', action);
    const result = next(action);
    console.log('The new state:', store.getState());
  console.groupEnd();
  return result;
}


// const thunk = (store) => (next) => (action) => {
//   if(typeof action === 'function'){
//     return action(store.dispatch);
//   }
//   return next(action);
// }

const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals,
  loading
}), Redux.applyMiddleware(ReduxThunk.default, checker, logger));
