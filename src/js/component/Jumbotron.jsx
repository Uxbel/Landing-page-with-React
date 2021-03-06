import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

export default Jumbotron;
