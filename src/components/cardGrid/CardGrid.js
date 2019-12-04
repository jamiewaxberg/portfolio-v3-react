import React, { Fragment } from 'react';
import Card from '../card/Card.js'

const links = [
	{id: 'work', text: 'work'}, 
	{id: 'adtl-exp', text: 'additional experience'},
	{id: 'about', text: 'about me'},
	{id: 'contact', text: 'get in touch'}
];

function CardGrid() {
	return (
		<Fragment>
			<Card />
		</Fragment>
	);
}

export default CardGrid;