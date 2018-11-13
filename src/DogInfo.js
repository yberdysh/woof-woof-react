import React from "react"

const DogInfo = (props) => {
  console.log("dog info props", props.selectedDog)

      let color;

      if (props.selectedDog.isGoodDog){
        color = "yellow"
      } else {
        color = "red"
      }

		const imgStyle = {
			boxShadow: `0 0 30px 15px ${color}, 0 0 50px 15px ${color}, 0 0 75px 45px ${color}`
		}

		return (
			<div id="dog-info">
                    <h1>DOGGO:</h1>
    				<img src={props.selectedDog.image} style={imgStyle} alt="pup pup"/>
    				<h2>{props.selectedDog.name}</h2>
    				<button onClick={() => props.toggleDog(props.selectedDog.id)}>{props.selectedDog.isGoodDog ? "Good dog" : "Bad Dog"}</button>
			</div>
		)

}

export default DogInfo
