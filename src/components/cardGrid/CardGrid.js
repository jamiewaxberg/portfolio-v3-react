import React from 'react';
import Card from '../card/Card.js'

function CardGrid() {
	const cards = [
		{
			title: 'Article Product Placements',
			imgPath: '../../images/ecom_placements.png',
			copy: <p>One of Bluprint's goals is to unite content and commerce. This project focused on introducing a CMS module that allows the Editorial and Merchandising teams to create product placements for the products sold on <a href="https://shop.mybluprint.com" target="_blank" rel="noopener noreferrer">shop.mybluprint.com</a> into articles created with our CMS tool. On the CMS side, product data is provided by the back end, and the article creator is able to input products themselves instead of just links. These product placements help improve ecommerce revenue numbers and bring together the two sides of Bluprint's product.</p>,
			techs: ['Handlebars', 'Less', 'Javascript', 'Brightspot', 'Java'],
			liveSiteUrl: 'https://www.mybluprint.com/article/5-quilting-rulers-you-need-to-tackle-any-project',
		},
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
			copy: <p>In the Fall of 2015, I was presented with the opportunity to conduct a web design training course internally at cleverbridge through the cleverAcademy initiative. I selected a group of six participants and made a six week long curriculum based on <a href="http://www.htmlandcssbook.com/" target="_blank" rel="noopener noreferrer">HTML & CSS by Jon Duckett</a>. The students made portfolio sites along the way and completed coding exercises. As a result of delivering an impactful course, the Client Services team internally hired three out of six participants after completion of their coding education.</p>,
			liveSiteUrl: 'http://jamie.gold/WebDesign101/',
			githubUrl: 'https://github.com/jamiewaxberg/Web-Design-101',
			techs: ['HTML5', 'Sass', 'jQuery', 'Gulp', 'Bourbon/Neat']
		}
	];

	return (
		<div id="work" className="withArrow">
			<div className="contentSection">
				<h4>Work</h4>
				<div className="cardGridWrapper ">
					{cards.map((card) => <Card card={card} key={card.title} />)}
				</div>
			</div>
		</div>
	);
}

export default CardGrid;