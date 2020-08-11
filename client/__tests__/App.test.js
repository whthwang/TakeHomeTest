import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../src/App.js'
import configureStore from 'redux-mock-store';
import PostEntry from '../src/components/PostEntry';
configure({ adapter: new Adapter() });


const fetchPosts = () => ({ type: "FETCH_POSTS" })
const editPost = () => ({ type: "EDIT_POST" })

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Test for React components', () => {
  it('fetchPost should dispatch action with type of FETCH_POSTS', () => {
    let initialState = {}
    let store = mockStore(initialState)
    store.dispatch(fetchPosts());
    let actions = store.getActions();
    let expectedPayload = { type: "FETCH_POSTS" }
    expect(actions).toEqual([expectedPayload]);
  });
  it('editPost should dispatch action with type of EDIT_POST', () => {
    let initialState = {}
    let store = mockStore(initialState)
    store.dispatch(editPost());
    let actions = store.getActions();
    let expectedPayload = { type: "EDIT_POST" }
    expect(actions).toEqual([expectedPayload]);
  });
});

test("renders an Edit View button", () => {
  let store = mockStore({});
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  const appComponent = wrapper.find(PostEntry);
  expect(appComponent).to.have.lengthOf(1);
});

// test("renders a Home View button", () => {

// });

// test("default view is 'all'", () => {

// });

// test("clicking Edit View button changes state view to 'edit'", () => {

// });

// test("clicking Home View button changes state view to 'all'", () => {

// });
