import { createStore } from "redux";
import rootReducers from "./reducers/index";

const initialSate = {};

const store = createStore(
    rootReducers,
    initialSate,

    // For monitoring the store from the browser
    // Do not forget to install Redux Dev Tools extension on the browser
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;