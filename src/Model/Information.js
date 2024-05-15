import { useState } from "react";

function Information() {
	let [currentPlate, setPlate] = useState("BB 78 ZN");

	//change numberPlate
	//let x = 0;
	//const arr = ["BB 79 ZN", "BC 80 ZN", "BD 81 ZN", "BF 82 ZN", "BG 83 ZN", "BH 83 ZN"];

	//wrap inside function
	function updatePlate() {
		setPlate("him zn");
	}

	return (
		<>
			<p>car 1: {currentPlate}</p>

			<button onClick={ () => {updatePlate()}}>New Plate</button>
		</>
	);
}

// console.log("This code must run once");
// fetch("http://localhost:8080/users")
// 	.then(response => {
// 		if (response.ok) {
// 			console.log("status: " + response.status);
// 			console.log(response);
// 			return response.json();
// 		} else {
// 			console.log("An error occured while fetching response");
// 		}
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

export default Information;
