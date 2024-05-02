function Information() {
	// console.log("This code must run twice: ");

	return <h1>Hello world!</h1>;
}

// console.log("This code must run once");
fetch("http://localhost:8080/users")
	.then(response => {
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
	});

export default Information;
