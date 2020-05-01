// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component{
	state = {
		mood: 'happy'
	}
	render() {
		return (
			<div onClick={this.onClick}>
				{this.state.mood}
			</div>
		)
	}
	onClick = () => {
		this.setState({
			mood: 'sad'
		})
	}
}

export default SimpleComponent