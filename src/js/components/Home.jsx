import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const texts = [
	{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa tempora iusto veniam consequatur "},
	{text:"odio exercitationem nihil quas hic non doloremque repudiandae laudantium ullam, autem, iure rerum eveniet ipsa itaque!"	},
	{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa tempora iusto veniam consequatur "},
	{text:"odio exercitationem nihil quas hic non doloremque repudiandae laudantium ullam, autem, iure rerum eveniet ipsa itaque!"}];
	
	return (
		<div>
		<Navbar/>
		<Jumbotron />
		
		<div className="d-flex row">

		{texts.map((card, index)=>(
			<Card text={card.text} key={index} />
		))} </div>

		<Footer/>
		</div>

	)

	
};

export default Home;