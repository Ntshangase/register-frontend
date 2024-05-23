import { useState, useEffect } from "react";

function Information() {
	const [currentData, setData] = useState([]);

	//fetch data from API	http://localhost:8080/users
	console.log("This code must run once");
	useEffect(() => { fetch("https://dummyjson.com/users")
		.then((response) => {
			if (response.ok) {
				console.log("status: " + response.status);
				console.log(response);
				return response.json();
			} else {
				console.log("An error occured while fetching response");
			}
		}
		.then((data) => {
			console.log(data.users);
			setData(data.users);
		})},[]);

	return (
		<>
			<div>
				<h1>Home renovations</h1>
			</div>
			<div>
				{currentData.map((item) => (
					<div key={item.id}>
					<p>{item.firstName}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Information;
