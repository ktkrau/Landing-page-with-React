import propTypes from "prop-types";
import React from "react";

const Footer = (props) => {
	return (
		<div className="row">
			<div id="footerpag" className="col-lg-12 bg-dark">
				{props.fooText}
			</div>
		</div>
	);
};
Footer.propTypes = {
	fooTex: propTypes.string,
};
export default Footer;
