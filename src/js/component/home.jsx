import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import CardDeck from "./CardDeck.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
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
			<CardDeck />
			<Footer />
		</div>
	);
};

export default Home;
