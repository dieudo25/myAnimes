import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

const initialSate = {};

const store = createStore(
    rootReducers,
    initialSate,
    applyMiddleware(thunk), // For dispatching async action
);

export default store;