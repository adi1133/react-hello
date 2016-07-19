//document.write("It works.");

var React = require('react');
var ReactDOM = require('react-dom');
var StringList = require('./list');
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );

var list = []
var buttonActive = false
const addItem = () => {
	list = list.concat(Math.floor(Math.random() * 100))
	render()
}

const render = () => {
	ReactDOM.render(
		React.DOM.div(null, [
			React.DOM.h1({ key: 'title' }, "Hello, world!" + list),
			React.DOM.p({ key: 'p' }, "Paragraph"),
			React.createElement(StringList, { key: 'list', data: list }),
			buttonActive ? React.DOM.button({ onClick: addItem, key: 'button' }, "hello") : undefined

		]),

		document.getElementById('container')
	);
}

render()


setTimeout(() => {
	buttonActive = true
	render()
}, 1000)
