import React from "react"

class DogInfo extends React.Component {

	isGoodDog(){
		if (this.props.selectedDog.isGoodDog){
			return "Good Dog!"
		} else {
			return "Bad Dog!"
		}
	}

	render(){
		if (this.props.selectedDog){
			const dogHaloColor = this.props.selectedDog.isGoodDog ? "yellow" : "red"
			
			const imgStyle = {
				boxShadow: `0 0 30px 15px ${dogHaloColor}, 0 0 50px 15px ${dogHaloColor}, 0 0 75px 45px ${dogHaloColor}`
			}

			return (
				<div id="dog-info">
				<img src={this.props.selectedDog.image} style={imgStyle} alt="pup pup"/>
				<h2>{this.props.selectedDog.name}</h2>
				<button onClick={this.props.toggleDogGoodness}>{this.isGoodDog()}</button>
				</div>
			)
		} else {
			return null
		}
	}
}

export default DogInfo
