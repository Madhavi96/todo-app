import { takeLatest, all, put, select } from 'redux-saga/effects';
import { LOAD_TODOS } from '../actions/actionTypes';

export const getToDos = state => state.user.data.userRole;

function* loadTodosAsync () {
    try {     
        const todosFetched = yield select(getToDos);   
        yield put({ type: LOAD_TODOS.SUCCESS, payload: todosFetched });
      } catch (error) {
        yield put({ type: LOAD_TODOS.FAILURE, payload: 'error occured' });
      }
}

function* watchLoadToDos() {
    yield takeLatest(LOAD_TODOS.REQUEST, loadTodosAsync);
}
  
export default function* rootSaga() {
    yield all([
        watchLoadToDos()
    ]);
}
