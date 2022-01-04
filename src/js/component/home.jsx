import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Firstheader from "./Firstheader.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="navBar">
				<Navbar />
			</div>
			<div className="jumbotron">
				<Jumbotron />
			</div>
			<div className="firstHeader">
				<Firstheader />
			</div>
			<div className="services">
				<Services />
			</div>
			<div className="portfolio">
				<Portfolio />
			</div>
			<div className="contact">
				<Contact />
			</div>
		</>
	);
};

export default Home;
