import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { planetsReducer } from "./reducers/planets";
import rootReducer from './reducers';

const composeEngancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacers = composeEngancers(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, composedEnhacers);