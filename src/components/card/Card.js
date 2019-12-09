import React from 'react';
import SeeMoreModal from '../seeMoreModal/SeeMoreModal.js';

function Card(props) {
	const card = props.card;

	function RenderCardLink() {
		const hasModalImages = card.modalImages;
		const hasGithubUrl = card.githubUrl;
	    let cardLink;

	    if (hasModalImages) {
	    	cardLink = <SeeMoreModal card={card} />;
	    } else if (!hasModalImages && !hasGithubUrl) {
	    	cardLink = <a target="_blank" rel="noopener noreferrer" className="cardLink" href={card.liveSiteUrl}>Live site</a>;
	    } else if (!hasModalImages && hasGithubUrl) {
	    	cardLink = <span><a target="_blank" rel="noopener noreferrer" className="cardLink" href={card.liveSiteUrl}>Live site</a> - <a target="_blank" rel="noopener noreferrer" className="cardLink" href={card.githubUrl}>Github</a></span>;
	    }

	    return cardLink;
	}

	function RenderDisclaimer() {
		const hasDisclaimer = card.disclaimer;
	    let disclaimer;

	    if (hasDisclaimer) {
	    	disclaimer = <p className="disclaimer">{card.disclaimer}</p> ;
	    } else {
	    	return;
	    }

	    return disclaimer;
	}
	

	return (
		<div className="card">
	    	<div className="card-image">
	      		<img src={process.env.PUBLIC_URL + card.imgPath} alt={card.title} />
	    	</div>
	    	<div className="card-header">
	      		<h5>{card.title}</h5>
	      	</div>
	      	<div className="card-copy">
	        	<p>{card.copy}</p>
	      	</div>
	      	<ul className="techs">
		      	{props.card.techs.map((tech) => <li>{tech}</li>)}
	      	</ul>
	      	{RenderCardLink()}
	        {RenderDisclaimer()}
    	</div>
		
		        
	);
}

export default Card;