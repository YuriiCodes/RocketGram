import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./data/reduxStore"


// import StoreContext, {Provider} from "./StoreContext";
// import StoreContext  from "./StoreContext";
import {Provider} from "react-redux";


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        // <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    // </React.StrictMode>
        , document.getElementById('root'))
};

// this arrow function will be executed, caliing reRenderEntireTree method with new state, when state changes
// store.subscribe(() => reRenderEntireTree(store.getState()));
reRenderEntireTree(store.getState());
store.getState()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
