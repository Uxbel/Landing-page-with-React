import React from "react";
import propTypes from "prop-types";

const CardStyle = {
	textAlign: "center"
};

const CardDeckStyle = {
	margin: "24px 0 24px 0"
};

const CardDeck = props => {
	return (
		<div className="card-deck" style={CardDeckStyle}>
			{props.DataCard.map((Card, i) => {
				return (
					<div className="card" key={i} style={CardStyle}>
						<img
							className="card-img-top"
							src={Card.imageUrl}
							alt={Card.imageAlt}
						/>
						<div className="card-body">
							<h5 className="card-title">{Card.title}</h5>
							<p className="card-text">{Card.text}</p>
							<a
								href={Card.buttonUrl}
								className="btn btn-primary">
								{Card.buttonLabel}
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

CardDeck.propTypes = {
	DataCard: propTypes.array
};

// const CardDeck = () => {
// 	return (
// 		<div className="card-deck" style={CardDeckStyle}>
// 			<Card
// 				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				title="Card title"
// 				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
// 				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				buttonLabel="Click Me"
// 			/>
// 			<Card
// 				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				title="Card title"
// 				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
// 				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				buttonLabel="Click Me"
// 			/>
// 			<Card
// 				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				title="Card title"
// 				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
// 				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				buttonLabel="Click Me"
// 			/>
// 			<Card
// 				imageUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				title="Card title"
// 				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus est. Phasellus vel justo sed augue molestie ornare."
// 				buttonUrl="https://profesional.tarkett.es/media/img/M/THH_25121917_25131917_25126917_25136917_001.jpg"
// 				buttonLabel="Click Me"
// 			/>
// 		</div>
// 	);
// };

export default CardDeck;
