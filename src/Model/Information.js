import { useState } from "react";

function Information() {
	const [currentData, setData] = useState([]);

	//fetch data from API
	console.log("This code must run once");
	fetch("http://localhost:8080/users")
		.then((response) => {
			if (response.ok) {
				console.log("status: " + response.status);
				console.log(response);
				return response.json();
			} else {
				console.log("An error occured while fetching response");
			}
		})
		.then((data) => {
			console.log(data);
			setData(data);
		});

	return (
		<>
			<div>
				<h1>Home renovations</h1>
			</div>
			<div>
				{currentData.map((item) => (
					<div key={item.name}>
						<p>{item.name}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Information;
