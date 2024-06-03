import { useState, useEffect } from "react";
import Students from "../View/Students";

function Information() {
	const [currentData, setData] = useState([]);

	//fetch data from API	http://localhost:8080/users
	useEffect(() => { fetch("https://dummyjson.com/users")
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
			console.log(data.users);
			setData(data.users); // dummyData.users
		})},[]);

	return (
		<>
			<Students props={100} />	{/**passing props to a child component */}

			<div>
				<h1>Home renovations</h1>
			</div>
			<div>
				{/* {currentData.map((item) => (
					<div key={item.studentId}>
						<p>StudentId: {item.studentId}</p>
						<p>Student Name: {item.name} {item.surname}</p>
						<p>Diploma in: {item.course}</p>
					</div>
				))} */}

				{/**for dummy data */} 
				{currentData.map(items => (
					<div key={items.id}>
						<p>{items.id}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Information;
