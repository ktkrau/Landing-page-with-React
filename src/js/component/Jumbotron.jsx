import propTypes from "prop-types";
import React from "react";

const Jumbotron = (props) => {
	return (
		<div className="container py-4">
			<div className="p-5 mb-4 bg-light rounded-3">
				<div className="container-fluid py5">
					<h1 className="display-5">{props.jumTitle}</h1>
					<p className="col-md-11 fs-6">{props.jumText}</p>
					<button className="btn btn-primary btn-lg" type="button">
						{props.jumButton}
					</button>
				</div>
			</div>
		</div>
	);
};
Jumbotron.Proptypes = {
	jumTitle: propTypes.string,
	jumText: propTypes.string,
	jumButton: propTypes.string,
};

export default Jumbotron;
