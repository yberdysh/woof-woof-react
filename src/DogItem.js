import React from "react"

const DogItem = (props) => {

  console.log("Props inside DogItem", props)
	return (<span onClick={() => props.handleDogClick(props.dog)} >{props.dog.name}</span>)
}

export default DogItem
