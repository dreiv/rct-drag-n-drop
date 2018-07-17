import React, { Component } from 'react'
import { fillRange } from './utils'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: fillRange(1, 10),
			dragging: false,
			dropKey: -1,
		}
	}

	drag = () => {
		this.setState({ dragging: true })
	}

	drop = key => {
		this.setState({ dragging: false })
		this.switchItemByKeys(key, this.state.dropKey)
	}

	dragOver = dropKey => {
		this.setState(prevState => {
			if (prevState.dropKey !== dropKey) {
				return { dropKey }
			}
		})
	}

	switchItemByKeys = (key, dropKey) => {
		const { items } = this.state
		const aux = items[key]

		items[key] = items[dropKey]
		items[dropKey] = aux

		this.setState({
			items,
			dropKey: -1,
		})
	}

	render() {
		const { items, dropKey } = this.state

		const renderedItems = items.map((item, idx) => (
			<li
				className={idx === dropKey && 'dropTarget'}
				key={idx}
				onDragStart={this.drag}
				onDragOver={() => this.dragOver(idx)}
				onDragEnd={() => this.drop(idx)}
				draggable="true"
			>
				{item}
			</li>
		))

		return <ul className="draggable">{renderedItems}</ul>
	}
}

export default App
