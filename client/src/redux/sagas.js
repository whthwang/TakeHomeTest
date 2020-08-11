//in the redux sagas, I will fetch the data
//redux saga is a type of middleware, 
//which takes redux actions dispatched,
//run it through the middleware first,
//and then it'll be dispatched to the reducer

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
