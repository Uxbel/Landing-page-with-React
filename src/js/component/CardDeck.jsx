import React from "react";
import Card from "/Users/marcoscarceles/Documents/Arantxa/4geeks/Landing-page-with-React/src/js/component/card.jsx";

const CardDeckStyle = {
	margin: "24px 0 24px 0"
};

// const DataCard = [
// 	(card1 = {
// 		imageUrl:
// 			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
// 		title: "Card title",
// 		text:
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare.",
// 		buttonUrl:
// 			"https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg",
// 		buttonLabel: "Click Me"
// 	})
// ];

// const getData = DataCard.map(data,i){
//     return
// }

const CardDeck = () => {
	return (
		<div className="card-deck" style={CardDeckStyle}>
			<Card
				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				title="Card title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				buttonLabel="Click Me"
			/>
			<Card
				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				title="Card title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				buttonLabel="Click Me"
			/>
			<Card
				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				title="Card title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				buttonLabel="Click Me"
			/>
			<Card
				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				title="Card title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
				buttonLabel="Click Me"
			/>
		</div>
	);
};

export default CardDeck;
