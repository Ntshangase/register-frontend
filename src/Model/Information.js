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
			<button
				onClick={() => {
					updateCount();
				}}
			>
				Update
			</button>

			<h1>Render elements</h1>
			<div>
				{currentCount.map((item) => (
					<div key={item.id}>
						<h6>{item.name}</h6>
						<h6>{item.course}</h6>
						<p>{item.id}</p>
						<p></p>
					</div>
				))}
			</div>
			
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
