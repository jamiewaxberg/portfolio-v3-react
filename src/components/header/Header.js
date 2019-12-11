import React, { Fragment } from 'react';
import animateScrollTo from 'animated-scroll-to';

const links = [
	{id: 'work', text: 'work'}, 
	{id: 'adtl-exp', text: 'additional experience'},
	{id: 'about', text: 'about me'},
	{id: 'contact', text: 'get in touch'}
];

const defaultOptions = {
  // Indicated if scroll animation should be canceled on user action (scroll/keypress/touch)
  // if set to "false" user input will be disabled until scroll animation is complete
  cancelOnUserAction: true,
  
  // Animation easing function, with "easeOutCubic" as default
  easing: t => (--t) * t * t + 1,
  
  // DOM element that should be scrolled
  // Example: document.querySelector('#element-to-scroll'),
  elementToScroll: window,
  
  // Horizontal scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  horizontalOffset: 0,
  
  // Maximum duration of the scroll animation
  maxDuration: 3000,
  
  // Minimum duration of the scroll animation
  minDuration: 250,
  
  // Duration of the scroll per 1000px
  speed: 500,
 
  // Vertical scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  verticalOffset: 0,
};

function scroll(id) {
	console.log(document.querySelector(`#${id}`))
	animateScrollTo(document.querySelector(`#${id}`), defaultOptions)
	  
}

function Header() {
	return (
		<Fragment>
			<h1>Jamie Gold</h1>
			<nav>
				{links.map((link) => <a className="navLink" key={link.id} onClick={() => scroll(link.id)}>{link.text}</a>)}
			</nav>
		</Fragment>
	);
}

export default Header;