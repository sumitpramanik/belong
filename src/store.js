import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let initialState = {};
let middleware = [thunk];
let enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
