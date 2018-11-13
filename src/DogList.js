import React from "react"
import DogItem from "./DogItem"


const DogList = (props) => {
	return (
    <div id="dog-list">
      {props.dogs.map(dog => <DogItem handleDogClick={props.handleDogClick} key={dog.id} dog={dog} />)}
    </div>
  )
}

export default DogList
