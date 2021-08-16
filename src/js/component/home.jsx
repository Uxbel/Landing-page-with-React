import React from "react";

//import your own components
import NavBar from "../component/NavBar.jsx";
import Card from "/Users/marcoscarceles/Documents/Arantxa/4geeks/Landing-page-with-React/src/js/component/card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CardDeck from "./CardDeck.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<CardDeck />
		</div>
	);
};

export default Home;
