import { call, put, takeLatest, delay, cancel } from 'redux-saga/effects';
import youtubeSearch from './api';
import actions, { SEARCH_REQUESTED } from './actions';

function* searchSaga(action) {
    const videos = yield call(youtubeSearch, action.term);
    yield put(actions.searchDone(videos));
};

export default function* rootSaga() {
    yield takeLatest(SEARCH_REQUESTED, searchSaga);
};
