import React, { Component } from 'react';
import dogs from "./dogData"

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  state = {
    selectedDogId: null,
    dogs: dogs
  }

  handleClick = (dog) => {
    this.setState({
      selectedDogId: dog.id
    })
  }

  toggleDogGoodness = () => {
    const newDogs = this.state.dogs.map( dog => {
      if (dog.id === this.state.selectedDogId){
        return {...dog, isGoodDog: !dog.isGoodDog}
      } else {
        return dog
      }
    })
    this.setState({dogs: newDogs})
  }

  selectedDog = () => {
    if (this.state.selectedDogId){
      return this.state.dogs.find( dog => dog.id === this.state.selectedDogId)
    } else {
      return null
    }
  }


  render() {
    return (
      <div>
        <DogList dogs={this.state.dogs} handleClick={this.handleClick}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogInfo selectedDog={this.selectedDog()} toggleDogGoodness={this.toggleDogGoodness}/>
        </div>
      </div>
    );
  }
}

export default App;
