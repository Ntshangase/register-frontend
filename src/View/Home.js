import "../Styles/home.css";
import React from "react";
import Navbar from "../Model/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div id="home">
				<h2>Welcome to student register application</h2>
			</div>
		</div>
	);
}
