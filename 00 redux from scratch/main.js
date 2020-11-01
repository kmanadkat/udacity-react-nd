function generateId () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

function createStore(reducer){
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }
  return {
    getState,
    subscribe,
    dispatch
  }
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

function app (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  }
}

const store = createStore(app)

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
  console.log(goalsList);
}

store.subscribe(() => {
  const {goals, todos } = store.getState();
  console.log(store.getState());
  document.getElementById('goals').innerHTML = '';
  document.getElementById('todos').innerHTML = '';
  goals.forEach(renderGoal);
  todos.forEach(renderTodo);
})