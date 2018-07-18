import React from "react"

class DogItem extends React.Component {

	render(){
		return <span onClick={() => this.props.handleClick(this.props.dog)}>{this.props.dog.name}</span>
	}
}

export default DogItem
