import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { planetsReducer } from "./reducers/planets";
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, composedEnhancers);