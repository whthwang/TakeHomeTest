import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import PostReducer from './redux/reducer';
import { watchFetchPostsAsync } from './redux/sagas';
import App from './App';

//middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(PostReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(watchFetchPostsAsync);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));