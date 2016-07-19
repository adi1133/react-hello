var React = require('react');

const StringList = React.createClass({
	render: function() {
		return React.DOM.ul({ key: 'list' }, this.props.data.map((item, pos) => React.createElement('li', { key: pos }, item)))
	},
	componentWillMount: () => console.log("mounting list")
})


module.exports = StringList
