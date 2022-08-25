import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import { chatsReducer } from "./chatsReducer";

const rootReducer = combineReducers({
    chatUsers: chatsReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))