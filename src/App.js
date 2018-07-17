import React, { Component } from 'react'
import { fillRange } from './utils'
import './App.css'

class App extends Component {
	items = fillRange(1, 10)

	render() {
		const renderedItems = this.items.map((item, idx) => (
			<li key={idx}>{item}</li>
		))

		return (
			<div className="App">
				<ul>{renderedItems}</ul>
			</div>
		)
	}
}

export default App
