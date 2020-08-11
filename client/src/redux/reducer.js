import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, EDIT_POST } from './constants';

const initialState = {
  allPosts: []
}

const PostReducer = (state = initialState, { type, payload }) => {
  console.log('hits post reducer')
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      console.log('hits fetch post success');
      return {
        ...state,
        allPosts: payload
      }
    case FETCH_POSTS_FAILURE:
      console.log('hits fetch post failure');
      return state;
    case EDIT_POST:
      console.log('hits edit post reducer');
      let newState = state.allPosts;
      let index = payload.id - 1;
      newState[index] = payload;
      console.log('this is newstate', newState);
      return {
        allPosts: newState
      }
    default:
      console.log('hits default cause', type, payload);
      return state;
  }
}

export default PostReducer;
