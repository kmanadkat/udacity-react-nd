function generateId () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

// App Code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

// Action Creators
const addTodoAction = (todo) => ({type: ADD_TODO, todo});
const removeTodoAction = (id) => ({type: REMOVE_TODO, id});
const toggleTodoAction = (id) => ({type: TOGGLE_TODO, id});
const addGoalAction = (goal) => ({type: ADD_GOAL, goal});
const removeGoalAction = (id) => ({type: REMOVE_GOAL, id});

function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO :
      return state.map((todo) => todo.id !== action.id ? todo :
        Object.assign({}, todo, { complete: !todo.complete }))
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
    default :
      return state
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

const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals
}), Redux.applyMiddleware(checker, logger));
