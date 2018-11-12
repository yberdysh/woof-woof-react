import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"

const BASE_URL = "http://localhost:3001/dogs"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogId: 1,
      dogs: []
    }
  }

  componentDidMount(){
    fetch(BASE_URL)
      .then(res => res.json())
      .then(dogs => this.setState({ dogs }))
  }

  toggleIsGoodDog = (dogId, isGoodDog) => {
    const newDogsArray = this.state.dogs.map(dog => {
      if (dog.id === dogId) {
        dog.isGoodDog = isGoodDog
      }
        return dog
    })
    this.setState({dogs: newDogsArray})
    fetch(BASE_URL + `/${dogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isGoodDog
      })
    })
  }

  displayDog = (dog) => {
    this.setState({
      dogId: dog.id
    })
  }

  dogToRender = () => {
    return this.state.dogs.find(dog => dog.id === this.state.dogId)
  }

  render() {
    return (
      <div>
        <DogList dogs={this.state.dogs} handleClick={this.displayDog}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          {this.state.dogs[0] && <DogInfo dog={ this.dogToRender() } handleClick={this.toggleIsGoodDog} />}
        </div>
      </div>
    );
  }
}

export default App;
