import { action } from '../reduxHelpers';
import { LOAD_TODOS } from './actionTypes';

const loadToDos = () => action(LOAD_TODOS.REQUEST);

export {
  loadToDos
};
