import React from "react";

//import your own components
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar
				brand="Start Bootstrap"
				menuItemOne="Home"
				menuItemTwo="About"
				menuItemThree="Services"
				menuItemFour="Contact"
			/>
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquamrepellat."
				buttonLabel="Call to action!"
				buttonURL="#"
			/>
			<Footer />
		</div>
	);
};

export default Home;
