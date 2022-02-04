import propTypes from "prop-types";
import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.cardImg} class="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardText}</p>
				<a href="#" className="btn btn-primary">
					{props.cardButton}
				</a>
			</div>
		</div>
	);
};
Card.PropTypes = {
	cardTitle: propTypes.string,
	cardText: propTypes.string,
	cardButton: propTypes.string,
	cardImg: propTypes.any,
};
export default Card;
