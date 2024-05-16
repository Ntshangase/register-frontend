import { useState } from "react";

function Information() {
	const [currentCount, setCount] = useState([
		{ name: "simphiwe", course: "mathematics", id: 2268 },
		{ name: "Thandeka", course: "English", id: 2345 },
	]);

	//change numberPlate
	console.log(currentCount);

	//wrap inside function
	function updateCount() {
		setCount((prevState) => ([...prevState, {name:"Joshua", course:"Physics", id: 2300}]));
	}

	return (
		<>
			<div>
				<h3>{currentCount.name}</h3>
				<p>{currentCount.course}</p>
				<p>{currentCount.id}</p>
			</div>

			<button
				onClick={() => {
					updateCount();
				}}
			>
				Update
			</button>
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
