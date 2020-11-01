import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

const addGoal = (goal) => ({type: ADD_GOAL, goal});
const removeGoal = (id) => ({type: REMOVE_GOAL, id});

export function handleAddGoal(name, cb){
  return (dispatch) => {
    return API.saveGoal(name)
    .then(goal => {
      dispatch(addGoal(goal));
      cb();
    })
    .catch(()=>{
      alert('There was an error, please try again');
    })
  }
}

export function handleDeleteGoal(goal){
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id)
    .catch(() =>{
      dispatch(addGoal(goal));
      alert("An Error occured, try again")
    })
  }
}