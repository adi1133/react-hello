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
        return <Todo value={this.props.value} onAdd={this.props.onAdd}/>
    }
}
class App extends React.Component {

    routes = (
        <Route component={NavDecorator}>
            <Route path="/" component={() => (<TodoComponent value={this.props.value} onAdd={this.props.onAdd}/>)}/>
            <Route path="/user" component={User}/>
        </Route>
    );

    render() {
        const {value, onAdd} = this.props;
        return <Router history={browserHistory}>
            {this.routes}
        </Router>
    }
}

export default App



