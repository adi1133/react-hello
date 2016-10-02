import React from "react";
import StringList from "./list";


class Todo extends React.Component {
    handleSubmit = () => {
        console.log("da")
    };

    render() {
        return <div>
            <h1 key="title">A list{String(this.props.value)}</h1>
            <StringList key="list" data={this.props.value}/>
            <button onClick={this.props.onAdd} key="button">hello</button>
            <input
                type="text"
                autoFocus="true"
                onKeyDown={this.handleSubmit}/>
        </div>
    }

}

export default Todo;