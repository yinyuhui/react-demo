import { put, takeEvery } from 'redux-saga/effects'
import { INIT_LIST } from './actionTypes'
import { getChangeList } from './actionCreators'

import axios from 'axios'

function* getInitList() {
    const res = yield axios.get('/api/todolist')
    const action = getChangeList([...res.data.list])
    yield put(action)
}

function* mySaga() {
    yield takeEvery(INIT_LIST, getInitList);
}

export default mySaga