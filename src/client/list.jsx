var React = require('react');

const StringList = React.createClass({
	render: function() {
		const listElements = this.props.data.map(
			(it, pos)=>
			<li key={pos}>{pos}{it}</li>
		)
		return <ul>{listElements}</ul>
	}
})

export default StringList
