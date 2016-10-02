import React from "react";
import {Router, Route, browserHistory, Link} from "react-router";
import Todo from "./todo";
import User from "./user";

const NavDecorator = React.createClass({
    render() {
        return <div>
            <nav>
                <Link to={'/'}>Todo</Link>|
                <Link to={'/user'}>User</Link>
            </nav>
            <div>{this.props.children}</div>
        </div>
    }
});

const Pag2 = React.createClass({
    render: () =>
        <Router history={browserHistory}>
            <Route component={NavDecorator}>
                <Route path="/" component={Todo}/>
                <Route path="/user" component={User}/>
            </Route>
        </Router>
});

export default Pag2
