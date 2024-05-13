import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaSignalMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import "../styles/navbar.css";
import logo from "../assets/60dd0e6437fca373ee98cbe4_1_qDCME2O7XA5TfXDGzSAcsg.gif";
const Navbar = () => {
	return (
		<nav className="navbar" data-aos="fade-left">
			<div className="logo">
				<img src={logo} alt="img" />
			</div>
			<div className="menu">
				<CiMenuBurger />
			</div>
			<div className="nav_links">
				<ul>
					<li>Home</li>
					<li>Social</li>
					<li>Profile</li>
				</ul>
			</div>
			<div className="nav_btn">
				<IoMdNotifications />
				<FaSignalMessenger />
			</div>
		</nav>
	);
};

export default Navbar;
