// src/components/App.js
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import Items from "./components/Items";

const App = () => {
	//Insilization size of array for items.
	const ItemArray = new Array(3).fill();
	useEffect(() => {
		//Item fade-right style:-
		Aos.init({ duration: 2000 });
	}, []);
	return (
		//Main container
		<div className="container  ">
			{/* Items container */}
			<div className="items items_container">
				{/* Heading */}
				<h1>Item List</h1>
				{/* Showing Item based on size of items array */}
				{ItemArray.map((ele, ind) => (
					// Passing index and key to Items component
					<Items key={ind} num={ind + 1} />
				))}
			</div>
			{/* Button for rotate animation */}
			<button className="rotate" onClick={rotateAnimation}>
				Rotate Me
			</button>
		</div>
	);
};
// onClick Rotaion Function
const rotateAnimation = () => {
	// Rotate animation
	const element = document.querySelector(".rotate");
	// Adding Rotate animation
	element.classList.add("rotate-animation");
	// Removing Rotate animation after 1 second
	setTimeout(() => {
		element.classList.remove("rotate-animation");
	}, 1000);
};

export default App;
