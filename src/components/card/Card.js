import React, { Fragment } from 'react';

const cards = [
	{
		title: 'Swapify',
		imgPath: '../../images/swapify.png',
		copy: 'Swapify is a self-service checkout creator, meant to give cleverbridge clients the ability to create their own custom checkouts without any manual work being done by the cleverbridge Client Services team. Swapify is an app built with React and Redux, and outputs a checkout that is fully ready to process global transactions. My focus on this project was on the checkout that gets generated, and making sure the process from the Swapify app to cleverbridge checkout is as seamless as possible.',
		techs: ['React', 'Redux', 'Node.js', 'Javascript', 'Sass', 'CSS Modules'],
		modalImages: ['../../images/swapify.png', '../../images/swapifyModal/screen-swap-layout.png', '../../images/swapifyModal/screen-swap-header.png', '../../images/swapifyModal/screen-swap-payment.png'],
		disclaimer: 'This project contains sensitive content and is not available for public viewing.'
	}
];

function Card() {
	return (
		<Fragment>
			{cards.map((card) => {
				return ( 
					<div className="card" key={card.title}>
			          <div className="card-image">
			          	<img src={process.env.PUBLIC_URL + card.imgPath} alt={card.title} />
			          </div>
			          <div className="card-header">
			            <h3>{card.title}</h3>
			          </div>
			          <div className="card-copy">
			            <p>{card.copy}</p>
			            <ul className="techs">
			            	{card.techs.map((tech) => <li>{tech}</li>)}
			            </ul>
			            <p className="see-more">See More <span>&rsaquo;</span></p>
			            <div className="modal">
			            	{card.modalImages.map((imagePath) => <img src={process.env.PUBLIC_URL + imagePath} alt="screenshot" />)}
			            </div>
			            <p className="cb">{card.disclaimer}</p> 
			          </div>
		        	</div>
		        )
			})}
    	</Fragment>
	);
}

export default Card;