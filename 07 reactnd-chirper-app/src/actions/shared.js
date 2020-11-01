import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveTweets} from './tweets';
import {setAuthedUser} from './authedUser'

import {showLoading, hideLoading} from 'react-redux-loading';

const AUTHED_ID = 'dan_abramov';

// Thunk Action Creator
export function handleInitialData(){
  return function(dispatch){
    dispatch(showLoading());
    return getInitialData()
      .then(({users, tweets}) => {
        // Call Dispatch on object returned from normal action creator
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      });
  }
}