import { FETCH_POSTS } from "../actions/actionTypes";

let initialState = {
  items: []
};
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        items: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
