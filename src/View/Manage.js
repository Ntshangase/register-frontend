// for updating and deleting students from students.txt. UPDATE-DELETE
import React from "react";
import Navbar from "../Model/Navbar";
import '../Styles/manage.css';

function Manage() {
	return (
		<div>
			<Navbar/>
			<h2>Manage student data</h2>

			<div id="manage">
				<p>studentId</p>
				<div className='buttonDiv'>
				<button>edit</button>
				<button>delete</button>
				</div>
			</div>
		</div>
	);
}

export default Manage;
