import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import CardDeck from "./CardDeck.jsx";

//create your first component
const DataCard = [
	{
		imageUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		title: "Card title",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Click Me"
	},
	{
		imageUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		title: "Card title",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Click Me"
	},
	{
		imageUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		title: "Card title",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Click Me"
	},
	{
		imageUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		title: "Card title",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
		buttonUrl:
			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
		buttonLabel: "Click Me"
	}
];
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
			<CardDeck DataCard={DataCard} />
			<Footer />
		</div>
	);
};

export default Home;
