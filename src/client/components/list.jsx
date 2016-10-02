var React = require('react');

const StringList = React.createClass({
    render: function () {
        const listElements = this.props.data.map(
            (it, pos)=>
                <li key={pos}><span>{pos}</span> <span>{it}</span></li>
        );
        return <ul>{listElements}</ul>
    }
});

export default StringList
