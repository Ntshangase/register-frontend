function Information() {
	// console.log("This code must run twice: ");

	return <h1>Hello world!</h1>;
}

// console.log("This code must run once");
fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
	.then(response => {
		if (response.ok) {
			console.log("status: " + response.status);
			console.log(response);
		} else {
			console.log("An error occured while fetching response");
		}
	})
	.then((data) => {
		console.log(data);
	});

export default Information;
