import React from 'react'
import ReactDOM from 'react-dom'
import StringList from './list'

import {Router, Route, Link, browserHistory} from 'react-router'

var list = []
var buttonActive = false
const addItem = function() {
	list = list.concat(Math.floor(Math.random() * 100))
	//this.setState({})
	this.forceUpdate()
}

const Pag1 = React.createClass((() => {
	var timer
	return {
		getInitialState: () => ({}),
		componentWillMount: function() {
			var self = this
			timer = setTimeout(() => {
				self.setState({buttonActive: true})
			}, 1000)
		},
		componentWillUnmount: () => clearTimeout(timer),
		render: function() {
			return <div>
				<h1 key="title">Hello, world!{String(list)}</h1>
				<p key="p">Paragraph</p>
				<StringList key="list" data={list}/> {this.state.buttonActive
					? <button onClick={addItem.bind(this)} key="button">hello</button>
					: undefined
				}
				<Link to={'user'}>Some Link</Link>

			</div>
		}
	}
})())

const Pag2 = React.createClass({
	render: () => <div><h1>aa</h1><Link to={'/'}>Home</Link></div>
})

const render = () => {
	ReactDOM.render(
		<Router history={browserHistory}>
		<Route path="/" component={Pag1}></Route>
		<Route path="/user" component={Pag2}></Route>
	</Router>, document.getElementById('container'));
}

render()
