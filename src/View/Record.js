import React from "react";
import Navbar from "../Model/Navbar";

export default function Record() {
	return (
		<div>
			<Navbar />
			<h2>Add student to collection</h2>

			<form>
				<p>
					<label>Name</label>
					<input />
				</p>
				<p>
					<label>Surname</label>
					<input />
				</p>
				<p>
					<label>Course</label>
					<input />
				</p>
				<p>
					<label>StudentId</label>
					<input />
				</p>

				<button>add</button>
			</form>
		</div>
	);
}
