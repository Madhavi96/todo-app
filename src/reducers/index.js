import { combineReducers } from 'redux';
import initialState from '../store/initialState';
import { LOAD_TODOS } from '../actions/actionTypes';
import { createReducer } from '../reduxHelpers';

const todos = createReducer(LOAD_TODOS, initialState.todos);

export default combineReducers({
  todos
});
