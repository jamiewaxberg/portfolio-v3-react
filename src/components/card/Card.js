import React, { Component, createRef } from 'react';

function showModal(e) {
	console.log(e)
}

class Card extends Component {
	constructor(props) {
		super(props)
		this.card = props.card
		this.toggleModal = this.toggleModal.bind(this)
		this.modalRef = createRef()
	}

	toggleModal() {
		let elClasses = this.modalRef.current.classList;
		if (elClasses.contains('hidden')) {
			elClasses.remove('hidden')
		} else {
			elClasses.add('hidden')
		}
	}

	render () {
		return (
			<div className="card">
	          <div className="card-image">
	          	<img src={process.env.PUBLIC_URL + this.card.imgPath} alt={this.card.title} />
	          </div>
	          <div className="card-header">
	            <h3>{this.card.title}</h3>
	          </div>
	          <div className="card-copy">
	            <p>{this.card.copy}</p>
	            <ul className="techs">
	            	{this.card.techs.map((tech) => <li key={tech}>{tech}</li>)}
	            </ul>
	            <p className="see-more" onClick={this.toggleModal}>See More <span>&rsaquo;</span></p>
	            <div className="modalWrapper hidden" ref={this.modalRef}>
	            	<div className="modalContent">
	            		{this.card.modalImages.map((imagePath) => <img src={process.env.PUBLIC_URL + imagePath} alt="screenshot" key={imagePath} />)}
	           		</div>
	           		<div className="close">
	           			<svg className="closeIcon" onClick={this.toggleModal} viewBox="0 0 100 100"><path d="M50,10.917c-21.584,0-39.083,17.499-39.083,39.083S28.416,89.083,50,89.083S89.083,71.584,89.083,50  S71.584,10.917,50,10.917z M67.045,62.802c1.172,1.172,1.172,3.071,0,4.243c-0.586,0.586-1.354,0.879-2.121,0.879  s-1.535-0.293-2.121-0.878L50,54.243L37.197,67.044c-0.586,0.585-1.354,0.878-2.121,0.878s-1.535-0.293-2.121-0.879  c-1.172-1.171-1.172-3.071,0-4.243L45.757,50L32.955,37.198c-1.172-1.172-1.172-3.071,0-4.243c1.172-1.172,3.07-1.171,4.242,0  L50,45.757l12.803-12.803c1.172-1.171,3.07-1.171,4.242,0c1.172,1.171,1.172,3.071,0,4.243L54.242,50L67.045,62.802z"></path></svg>
	           		</div>
	            </div>
	            <p className="cb">{this.card.disclaimer}</p> 
	          </div>
	    	</div>
			
			        
		);
	}
}

export default Card;