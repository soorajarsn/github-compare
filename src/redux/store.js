import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk';
// import logger from "redux-logger";
// import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    user:userReducer
});
// for developement purpose
// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
//for production build
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;