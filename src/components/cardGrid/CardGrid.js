import React from 'react';
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
		title: 'Swapify',
		imgPath: '../../images/swapify.png',
		copy: 'Swapify is a self-service checkout creator, meant to give cleverbridge clients the ability to create their own custom checkouts without any manual work being done by the cleverbridge Client Services team. Swapify is an app built with React and Redux, and outputs a checkout that is fully ready to process global transactions. My focus on this project was on the checkout that gets generated, and making sure the process from the Swapify app to cleverbridge checkout is as seamless as possible.',
		techs: ['React', 'Redux', 'Node.js', 'Javascript', 'Sass', 'CSS Modules'],
		modalImages: ['../../images/swapify.png', '../../images/swapifyModal/screen-swap-layout.png', '../../images/swapifyModal/screen-swap-header.png', '../../images/swapifyModal/screen-swap-payment.png'],
		disclaimer: ''
	},
	{
		title: 'Web Design 101',
		imgPath: '../../images/webDesign101.png',
		copy: 'In the Fall of 2015, I was presented with the opportunity to conduct a web design training course internally at cleverbridge through the cleverAcademy initiative. I selected a group of six participants and made a six week long curriculum based on HTML & CSS by Jon Duckett. The students made portfolio sites along the way and completed coding exercises. As a result of delivering an impactful course, the Client Services team internally hired three out of six participants after completion of their coding education.',
		techs: ['HTML5', 'Sass', 'jQuery', 'Gulp', 'Bourbon/Neat'],
		modalImages: ['../../images/swapify.png', '../../images/swapifyModal/screen-swap-layout.png', '../../images/swapifyModal/screen-swap-header.png', '../../images/swapifyModal/screen-swap-payment.png'],
		disclaimer: null
	}
];

function CardGrid() {
	return (
		<div className="cardGridWrapper">
			{cards.map((card) => <Card card={card} key={card.title} />)}
		</div>
	);
}

export default CardGrid;