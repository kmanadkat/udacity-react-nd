// Action Type
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// Action Creator
export function setAuthedUser(id){
  return{
    type: SET_AUTHED_USER,
    id,
  }
}