import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import {createStore} from "redux";


const counter = (state = [], action) => {
    console.log('state', state, action);
    switch (action.type) {
        case 'ADD':
            return [...state, action.data];
        default:
            return state
    }
};


const store = createStore(counter);


const render = () => {
    ReactDOM.render(
        <App value={store.getState()}
             onAdd={() => store.dispatch({type: 'ADD', data: Math.random() * 1000 | 0})}
        />,
        document.getElementById('container'));
};

render();
store.subscribe(render);