import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import image from "../../img/pexels.jpg";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<div>
			<Navbar
				navTitle="Start Bootstrap"
				navHome="Home"
				navAbout="About"
				navServices="Services"
				navContact="Contact"
			/>
			<div className="container">
				<Jumbotron
					jumTitle="A Warm Welcome!"
					jumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nulla risus nisl, venenatis at dui vel, congue posuere
				felis. Nulla lacinia placerat ornare. Proin ac massa
				nisi. Sed ultricies neque et nibh posuere, a placerat
				velit cursus. Vestibulum iaculis nisl nec viverra
				suscipit. Ut gravida nulla volutpat elit lobortis, vel
				vehicula nunc mattis."
					jumButton="Call to action!"
				/>
				<div className="row">
					<div className="col-md-3">
						<Card
							cardTitle="Card title"
							cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada, eu convallis orci bibendum. Nam aliquet sit amet erat nec gravida."
							cardButton="Find out more!"
							cardImg={image}
						/>
					</div>
					<div className="col-md-3">
						<Card
							cardTitle="Card title"
							cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada, eu convallis orci bibendum. Nam aliquet sit amet erat nec gravida."
							cardButton="Find out more!"
							cardImg={image}
						/>
					</div>
					<div className="col-md-3">
						<Card
							cardTitle="Card title"
							cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada, eu convallis orci bibendum. Nam aliquet sit amet erat nec gravida."
							cardButton="Find out more!"
							cardImg={image}
						/>
					</div>
					<div className="col-md-3">
						<Card
							cardTitle="Card title"
							cardText="nteger risus lectus, convallis sed vulputate non, laoreet eu nunc. Vestibulum mollis dui sed quam malesuada, eu convallis orci bibendum. Nam aliquet sit amet erat nec gravida."
							cardButton="Find out more!"
							cardImg={image}
						/>
					</div>
				</div>
			</div>
			<Footer fooText="Copyright © Your Website 2018" />
		</div>
	);
};

export default Home;
