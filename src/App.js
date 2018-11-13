import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {

  constructor(){
    super()
    this.state = {
      dogs: [],
      selectedDog: null
    }
    this.handleDogClick = this.handleDogClick.bind(this)
    this.toggleDog = this.toggleDog.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:3001/dogs')
    .then(res => res.json())
    .then(dogs => this.setState({dogs}))
  }

  handleDogClick(dog){
    this.setState({selectedDog: dog})
  }

  filterDogs = () => {
    const newArr = this.state.dogs.filter(dog => dog.isGoodDog)
    this.setState({dogs: newArr})
  }

  toggleDog(dogId){
    const isGoodDog = this.state.selectedDog.isGoodDog
    fetch(`http://localhost:3001/dogs/${dogId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        isGoodDog: !isGoodDog
      })
    })
    .then(response => response.json())
    .then(dogObject => this.setState({selectedDog: dogObject}))
  }


  render() {
    console.log("STATE in App", this.state)
    return (
      <div>
        <DogList handleDogClick={this.handleDogClick} dogs={this.state.dogs} />
        <div id="dog-summary-container">
        <button onClick={this.filterDogs} >Filter Good Dogs</button>
          {this.state.selectedDog && <DogInfo toggleDog={this.toggleDog} selectedDog={this.state.selectedDog} />}
        </div>
      </div>
    );
  }
}

export default App;
