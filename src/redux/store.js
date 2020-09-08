import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    user:userReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
export default store;