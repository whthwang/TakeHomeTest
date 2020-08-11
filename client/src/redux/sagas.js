import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import 'regenerator-runtime'; //needed to use generator functions

import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';

function* fetchPostsAsync() {
  console.log('hits fetch posts async');
  try {
    const { data } = yield axios.get('http://localhost:3000/posts');
    yield put({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error });
  }
}

export function* watchFetchPostsAsync() {
  yield takeEvery(FETCH_POSTS, fetchPostsAsync);
}
