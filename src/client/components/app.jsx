import React from "react";
import {Router, Route, browserHistory, Link} from "react-router";
import Todo from "./todo";
import User from "./user";

class NavDecorator extends React.Component {
    render() {
        return <div>
            <nav>
                <Link to={'/'}>Todo</Link>|
                <Link to={'/user'}>User</Link>
            </nav>
            <div>{this.props.children}</div>
        </div>
    }
}

class TodoComponent extends React.Component {
    render() {
        return <Todo value={this.props.route.value} onAdd={this.props.route.onAdd}/>
    }
}
class App extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route component={NavDecorator}>
                <Route value={this.props.value} onAdd={this.props.onAdd} path="/" component={TodoComponent}/>
                <Route path="/user" component={User}/>
            </Route>
        </Router>
    }
}

export default App



