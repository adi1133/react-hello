import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import StringList from "./components/list";
import {Router, Route, Link, browserHistory} from "react-router";
import Todo from "./components/todo"
import User from "./components/user"






const render = () => {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Todo}/>
            <Route path="/user" component={User}/>
        </Router>, document.getElementById('container'));
};

render();
