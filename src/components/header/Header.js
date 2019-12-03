import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.scss';

const links = [
	{id: 'work', text: 'work'}, 
	{id: 'adtl-exp', text: 'additional experience'},
	{id: 'about', text: 'about me'},
	{id: 'contact', text: 'get in touch'}
];

function Header() {
	return (
		<Fragment>
			<h1>Jamie Gold</h1>
			<nav>
				{links.map((link) => <a className="navLink" key={link.id} href={`#${link.id}`}>{link.text}</a>)}
			</nav>
		</Fragment>
	);
}

export default Header;