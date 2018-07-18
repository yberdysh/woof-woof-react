import React from "react"
import DogItem from "./DogItem"


class DogList extends React.Component {

	render(){
		return (
      <div id="dog-list">
        { this.props.dogs.map( d => <DogItem key={d.id} handleClick={this.props.handleClick} dog={d}/> ) }
      </div>
  )
	}
}

export default DogList
