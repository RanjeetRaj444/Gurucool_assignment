import React from "react";

const Items = ({ num, ele }) => {
	return (
		<div data-aos="fade-right" className="item_box" data-aos-delay={`${num}00`}>
			<h2>
				<ele.logo />
				<span>{ele.name} </span>
			</h2>
		</div>
	);
};

export default Items;
