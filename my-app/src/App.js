// src/components/App.js
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import {
	FaLinkedin,
	FaTwitter,
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
} from "react-icons/fa";
import Carousel from "react-elastic-carousel";

const App = () => {
	//Insilization size of array for items.
	const ItemArray = [
		{
			name: "Linkedin",
			logo: FaLinkedin,
		},
		{
			name: "Twitter",
			logo: FaTwitter,
		},
		{
			name: "Instagram",
			logo: FaInstagram,
		},
		{
			name: "Facebook",
			logo: FaFacebook,
		},
		{
			name: "WhatsApp",
			logo: FaWhatsapp,
		},
	];
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 2 },
		{ width: 1150, itemsToShow: 3 },
		{ width: 1450, itemsToShow: 4 },
		{ width: 1750, itemsToShow: 5 },
	];
	useEffect(() => {
		//Item fade-right style:-
		Aos.init({ duration: 2000 });
	}, []);
	return (
		//Main container
		<div className="container  ">
			{/* Navbar for mobile screen */}
			<Navbar />
			{/* Items container */}
			<div className="items items_container items_container_large_screen">
				{/* Heading */}
				<h1>Social List</h1>
				{/* Mapping Items array */}
				{ItemArray.map((ele, ind) => (
					<Items key={ind} ele={ele} num={ind + 1} />
				))}
				{/* Showing Item based on size of items array */}
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
