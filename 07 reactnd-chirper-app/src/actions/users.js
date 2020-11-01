// Action Type
export const RECEIVE_USERS = 'RECEIVE_USERS';

// Action Creator
export function receiveUsers(users){
  return {
    type: RECEIVE_USERS,
    users
  }
}