import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

//we import thunk under thunk middleware name
import  thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    sidebar:sidebarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;