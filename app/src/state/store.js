import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

const initialSate = {};

// For monitoring the store from the browser
// Do not forget to install Redux Dev Tools extension on the browser
const reduxDevToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__;
const reduxDevToolsExtentionFunciton= window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancer = compose(reduxDevToolsExtention, reduxDevToolsExtentionFunciton)
const store = createStore(
    rootReducers,
    initialSate,
    applyMiddleware(thunk),
    //composeEnhancer    
);

export default store;