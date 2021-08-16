import React from "react";
import PropTypes from "prop-types";

const JumbotronStyle = {
	margin: "24px 15px 0 15px"
};

const Jumbotron = props => {
	return (
		<div className="jumbotron" style={JumbotronStyle}>
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
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
