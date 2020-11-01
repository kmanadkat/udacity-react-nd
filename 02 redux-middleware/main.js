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

// function app (state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     goals: goals(state.goals, action),
//   }
// }

function addTodo(){
  const todoInput = document.getElementById("todo");
  const title = todoInput.value;
  todoInput.value = '';
  store.dispatch(addTodoAction({
      id: generateId(),
      name: title,
      complete: false,
    }));
}

function toggleTodo(id){
 store.dispatch(toggleTodoAction(id.toString()));
}

function removeTodo(id){
 store.dispatch(removeTodoAction(id.toString()));
}

function removeGoal(id){
 store.dispatch(removeGoalAction(id.toString()));
}

function addGoal(){
  const goalInput = document.getElementById("goal");
  const title = goalInput.value;
  goalInput.value = '';
 store.dispatch(addGoalAction({
    id: generateId(),
    name: title,
  }));
}

document.getElementById('addTodo').onclick = (event) =>{
  addTodo();
}

document.getElementById('addGoal').onclick = (event) =>{
  addGoal();
}

function renderTodo(todo){
  document.getElementById('todos').innerHTML 
    += `<li style="cursor: pointer;" ${todo.complete ? 'class="completed"' : ''} data-todoId='${todo.id}' onclick="toggleTodo('${todo.id}')">
      ${todo.name}
      <span class="text-danger" onclick="removeTodo('${todo.id}')"> X</span>
      </li>`
}

function renderGoal(goal){
  const goalsList = document.getElementById('goals');
  goalsList.innerHTML += `<li style="cursor: pointer;" data-id='${goal.id}'>
    ${goal.name}
    <span class="text-danger" onclick="removeGoal('${goal.id}')"> X</span>
  </li>`
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

store.subscribe(() => {
  const {goals, todos } = store.getState();
  document.getElementById('goals').innerHTML = '';
  document.getElementById('todos').innerHTML = '';
  goals.forEach(renderGoal);
  todos.forEach(renderTodo);
})