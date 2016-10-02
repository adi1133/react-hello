import React from "react";
import StringList from "./list";


class Todo extends React.Component {
    state = {
        list: []
    };

    addItem = () => {
        this.setState({list: this.state.list.concat([Math.random() * 1000 | 0])});
    };

    handleSubmit = () => {
        console.log('test')
    };

    render() {
        return <div>
            <h1 key="title">A list{String(this.state.list)}</h1>
            <StringList key="list" data={this.state.list}/>
            <button onClick={this.addItem} key="button">hello</button>
            <input
                type="text"
                autoFocus="true"
                onKeyDown={this.handleSubmit}/>
        </div>
    }

}

export default Todo;