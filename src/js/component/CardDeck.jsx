import React from "react";
import propTypes from "prop-types";
import "../../styles/CardDeckStyles.scss";

const CardDeck = props => {
	return (
		<div className="card-deck">
			{props.DataCard.map((Card, i) => {
				return (
					<div className="card" key={i}>
						<img
							className="card-img-top img-fluid"
							src={Card.imageUrl}
							alt={Card.imageAlt}
						/>
						<div className="card-body">
							<h5 className="card-title">{Card.title}</h5>
							<p className="card-text">{Card.text}</p>
							<a
								href={Card.buttonUrl}
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
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
