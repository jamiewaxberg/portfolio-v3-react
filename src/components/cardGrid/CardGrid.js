import React from 'react';
import Card from '../card/Card.js'

function CardGrid() {
	const cards = [
		{
			title: 'Combined Checkout Offers',
			imgPath: '../../images/combined-checkout.png',
			copy: 'Combined Checkout gives Bluprint ecommerce and TVOD buyers the chance to also buy a subscription to Bluprint\'s streaming service during their transaction. This feature creates the ability for a subscription offer to be included in the URL, and then the offer will be cookied and added to the user\'s cart. Combined Checkout is a powerful tool for Bluprint to acquire new subscribers, and presenting offers to users that are already purchasing products during times of high traffic is a crucial revenue driver to Bluprint\'s subscription business.',
			techs: ['React', 'Redux', 'Javascript', 'Node'],
			modalImages: ['../../images/combined-checkout-modal/combined-checkout1.png', '../../images/combined-checkout-modal/combined-checkout2.png', '../../images/combined-checkout.png'],
			disclaimer: 'The code for this project contains sensitive content and is not available for public viewing.'
		},
		{
			title: 'Syndicated Navigation',
			imgPath: '../../images/syndicated-nav.png',
			copy: 'After introducing a CMS-driven front end solution in our technology ecosystem, we were faced with a problem – how to have two technically separate front ends with a single navigation bar. The solution we came up with was to scrape the navigation built with CMS-driven code and pull it in via AJAX to pages built with our React stack. The main benefit of this approach is that it allows the navigation bar to be fully configureable via the CMS, and those changes will carry over to React-driven pages. The integration allowed for stateful communication between the two apps.',
			techs: ['React', 'Redux', 'Ajax', 'Javascript', 'Node'],
			disclaimer: 'The code for this project contains sensitive content and is not available for public viewing.'
		},
		{
			title: 'Edit Watchlist',
			imgPath: '../../images/edit-continue-watching.png',
			copy: 'Watchlist gives users the ability pick up where they left off in episodes of Bluprint classes, and this improvement allows users to edit the cards in the Watchlist grid. This feature was part of a larger epic of improvements made to modules around the site that directly tie to the video watching experience. We also track clicks and deletions made by users. This data informs the business on which classes our users choose to not continue watching, which leads to more informed descision making and content creation.',
			techs: ['Handlebars', 'Less', 'Javascript', 'Brightspot', 'Java', 'Google Analytics'],
			modalImages: ['../../images/editContinueWatchingModal/edit-continue-watching1.png', '../../images/edit-continue-watching.png', '../../images/editContinueWatchingModal/edit-continue-watching2.png'],
			disclaimer: 'This project contains sensitive content and is not available for public viewing.'
		},
		{
			title: 'Product Placement Module',
			imgPath: '../../images/ecom_placements.png',
			copy: <p>One of Bluprint's goals is to unite content and commerce. This project focused on introducing a CMS module that allows the Editorial and Merchandising teams to insert product placements for the products sold on <a href="https://shop.mybluprint.com" target="_blank" rel="noopener noreferrer">shop.mybluprint.com</a> into pages created with our CMS tool. On the CMS side, product data is provided by the back end, and the page editor is able to input products themselves and populate data fields. These product placements help improve ecommerce revenue numbers and bring together the two sides of Bluprint's product.</p>,
			techs: ['Handlebars', 'Less', 'Javascript', 'Brightspot', 'Java', 'Google Analytics'],
			disclaimer: 'The code for this project contains sensitive content and is not available for public viewing.'
		},
		{
			title: 'Select Plan Flow',
			imgPath: '../../images/select-plan.png',
			copy: 'The Select Plan page is the main avenue through which Bluprint users purchase their subscriptions, with either a monthly or annual plan. I worked on an overhaul of an early stage of this flow, in which we eliminated a page to reduce clicks, added styling to increase conversion, and added a configureable success screen that leads new subscribers to the next place in their Bluprint journey. This project was an important acquisition driver during the early stages of Bluprint\'s subscription product.',
			techs: ['React', 'Redux', 'Sass', 'Recompose'],
			modalImages: ['../../images/select-plan.png', '../../images/select-plan-modal/select-plan-paypal.png', '../../images/select-plan-modal/select-plan-paypal2.png', '../../images/select-plan-modal/select-plan-confirm.png'],
			disclaimer: 'The code for this project contains sensitive content and is not available for public viewing.'
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