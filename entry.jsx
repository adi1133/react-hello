import React from 'react'
import ReactDOM from 'react-dom'
import StringList from './list'

import {Router, Route, Link, browserHistory} from 'react-router'

var list = []
var buttonActive = false
const addItem = () => {
	list = list.concat(Math.floor(Math.random() * 100))
	render()
}

const render = () => {
	ReactDOM.render(
		<div>
			<h1 key="title">Hello, world!{list}</h1>
			<p key="p">Paragraph</p>
			<StringList key="list" data={list}/>
			{
				buttonActive ?
					<button onClick={addItem} key="button">hello</button> : undefined
			}

	</div>, document.getElementById('container'));
}

render()

setTimeout(() => {
	buttonActive = true
	render()
}, 1000)
