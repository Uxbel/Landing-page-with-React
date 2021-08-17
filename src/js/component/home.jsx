import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import CardDeck from "./CardDeck.jsx";

//create your first component
const DataCard = [
	{
		imageUrl:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bowl-of-colorful-breakfast-cereal-with-milk-on-royalty-free-image-1622590844.jpg?crop=0.668xw:1.00xh;0.136xw,0&resize=640:*",
		title: "CHERIOS",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Take a Bite",
		imageAlt: "Grey Rectangle"
	},
	{
		imageUrl:
			"https://www.verywellfit.com/thmb/1mL7GRztKHp4uHx9EM-TK7vStUc=/3000x2002/filters:fill(FFDB5D,1)/cereal-and-milk-a911b706cf3f4fa3bfa857ec20cd3a80.jpg",
		title: "HEALTHY",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Take a Bite",
		imageAlt: "Grey Rectangle"
	},
	{
		imageUrl: "https://pbs.twimg.com/media/EWKlFloWkAA5MD2.jpg",
		title: "FUNNY",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Take a Bite",
		imageAlt: "Grey Rectangle"
	},
	{
		imageUrl:
			"https://www.nestle.com/sites/default/files/asset-library/publishingimages/aboutus/businesses/cpw-cereals.jpg",
		title: "CHOCODELICIUS",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Take a Bite",
		imageAlt: "Grey Rectangle"
	}
];
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
			<CardDeck DataCard={DataCard} />
			<Footer />
		</div>
	);
};

export default Home;
