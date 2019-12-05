import React, { Fragment } from 'react';
import Card from '../card/Card.js'

const cards = [
	{
		title: 'Swapify',
		imgPath: '../../images/swapify.png',
		copy: 'Swapify is a self-service checkout creator, meant to give cleverbridge clients the ability to create their own custom checkouts without any manual work being done by the cleverbridge Client Services team. Swapify is an app built with React and Redux, and outputs a checkout that is fully ready to process global transactions. My focus on this project was on the checkout that gets generated, and making sure the process from the Swapify app to cleverbridge checkout is as seamless as possible.',
		techs: ['React', 'Redux', 'Node.js', 'Javascript', 'Sass', 'CSS Modules'],
		modalImages: ['../../images/swapify.png', '../../images/swapifyModal/screen-swap-layout.png', '../../images/swapifyModal/screen-swap-header.png', '../../images/swapifyModal/screen-swap-payment.png'],
		disclaimer: 'This project contains sensitive content and is not available for public viewing.'
	},
	{
		title: 'Sassy',
		imgPath: '../../images/sassy-2.png',
		copy: 'Sassy is a base architecture created to increase efficiency and decrease manual work for the cleverbridge Business Operations team. This project increased the efficiency of the team dramatically, standardized processes, and produced a higher quality result. It is built largely with Sass, Bourbon/Neat, and Gulp. I made significant contributions to version 2 of this project, and independently developed and released version 3 for the rest of the Business Operations team.',
		techs: ['Sass', 'Gulp', 'Javascript', 'Node.js', 'Bourbon/Neat', 'CSS Modules'],
		liveSiteUrl: 'https://www.cleverbridge.com/1290/?scope=checkout&cart=153358&cfg=sass2col_live',
		disclaimer: 'The code for this project contains sensitive content and is not available for public viewing.'
	},
	{
		title: 'Web Design 101',
		imgPath: '../../images/webDesign101.png',
		copy: 'In the Fall of 2015, I was presented with the opportunity to conduct a web design training course internally at cleverbridge through the cleverAcademy initiative. I selected a group of six participants and made a six week long curriculum based on HTML & CSS by Jon Duckett. The students made portfolio sites along the way and completed coding exercises. As a result of delivering an impactful course, the Client Services team internally hired three out of six participants after completion of their coding education.',
		liveSiteUrl: 'http://jamie.gold/WebDesign101/',
		githubUrl: 'https://github.com/jamiewaxberg/Web-Design-101',
		techs: ['HTML5', 'Sass', 'jQuery', 'Gulp', 'Bourbon/Neat']
	}
];

function CardGrid() {
	return (
		<Fragment>
			<h4>Work</h4>
			<div className="cardGridWrapper">
				{cards.map((card) => <Card card={card} key={card.title} />)}
			</div>
		</Fragment>
	);
}

export default CardGrid;