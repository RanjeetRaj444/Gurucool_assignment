import React from "react";

const Items = ({ num }) => {

	return (
		
		<div data-aos="fade-right" data-aos-delay={`${num}00`}>
			<h2>Item {num}</h2>
		</div>
	);
};

export default Items;
