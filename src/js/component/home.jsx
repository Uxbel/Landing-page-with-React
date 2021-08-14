import React from "react";

//import your own components
import Navbar from "../component/Navbar.jsx";

//import your own components
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Footer />
		</div>
	);
};

export default Home;
