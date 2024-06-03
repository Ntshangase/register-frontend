// for viewing students records on students.txt. READ

import React from "react";
import Navbar from "../Model/Navbar";

function Students(props) {
	console.log(props);
	return (
		<div>
			<Navbar />
			<h2>Display student data</h2>

			<div> {/**This has to be inside the thing, with key: value vibes */}
				<div>
					<p>studentName</p>
					<p>studentSurname</p>
					<p>studentCourse</p>
					<p>studentId</p>
				</div>
			</div>
		</div>
	);
}

export default Students;
