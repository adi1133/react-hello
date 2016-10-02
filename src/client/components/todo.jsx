import React from "react";
import StringList from "./list";
import {Link} from "react-router";


var list = [];
var buttonActive = false;
const addItem = function () {
    list = list.concat(Math.floor(Math.random() * 100));
    //this.setState({})
    this.forceUpdate()
};

const Pag1 = React.createClass((() => {
    var timer;
    return {
        getInitialState: () => ({}),
        componentWillMount: function () {
            var self = this;
            timer = setTimeout(() => {
                self.setState({buttonActive: true})
            }, 1000)
        },
        componentWillUnmount: () => clearTimeout(timer),
        render: function () {
            return <div>
                <h1 key="title">A list{String(list)}</h1>
                <StringList key="list" data={list}/> {this.state.buttonActive
                ? <button onClick={addItem.bind(this)} key="button">hello</button>
                : undefined
            }
                <Link to={'user'}>Some Link</Link>

            </div>
        }
    }
})());

export default Pag1;