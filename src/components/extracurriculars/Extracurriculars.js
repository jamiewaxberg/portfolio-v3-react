import React from 'react';

const extracurriculars = {
	hackathons: [
		{
			name: 'Hack to the Future',
			title: 'Lead Organizer',
			date: 'May 2016',
			description: 'Hack to the Future was the second event of the cleverbridge hackathon series. It was an event that brought together Chicago-area developers of all skill levels and educators to develop tools that extend learning both inside and outside the classroom. The goal of the hackathon was to create a website or application that would increase the Chicago Public Schools graduation rate. Each team had at least one educator, and the developers and educators collaborated together to produce a project that would help students learn, regardless of resources. Hack to the Future had a huge impact on the community and created additional opportunities for cleverbridge and the rest of the Chicago tech community to work with Chicago Public Schools.',
			readMoreLink: 'https://hacktothefuture.splashthat.com/'
		},
		{
			name: 'She Hacks Chi',
			title: 'Co-organizer',
			date: 'October 2015',
			description: 'She Hacks Chi was the first cleverbridge hackathon, and was aimed to close the gender gap in tech. We brought together beginner and intermediate coders together with experienced developers to hack in a supportive environment. The teams built an application, website, or game that would get girls ages 8-15 interested in STEM. Not only were the projects aimed at getting women in tech, but the hackathon itself provided she-coders with opportunities to network, design, and build innovative websites and applications that would have a direct impact on the female development community in Chicago. Every team produced a successful project, and many of the event participants still keep in touch throughout the Chicago tech community.',
			readMoreLink: 'https://shehackschi.splashthat.com/'
		}
	],
	conferences: [
		{
			name: 'JazzCon.Tech',
			date: 'March 2017',
			description: 'JazzCon.Tech is one of the Southeast’s premier annual conferences dedicated to JavaScript, Web and Mobile related technologies, tools, and frameworks. JazzCon.Tech features presentations and workshops from global technology and thought leaders as well as local community speakers. I attended a full day of React workshops and attended many React and JavaScript focused sessions.',
			readMoreLink: 'http://jazzcon.tech/'
		},
		{
			name: 'HTML5Devconf',
			date: 'October 2015',
			description: 'HTML5Devconf is the largest gathering of technical software developers, designers and decision makers in the world focused on Internet software technologies such as JavaScript, HTML5, CSS, node.js and other cross platform web, mobile and server technologies. I attended React and JavaScript workshops and sessions on a wide variety of subjects.',
			readMoreLink: 'http://html5devconf.com/'
		}
	]
}

function Extracurriculars() {
	return (
		<div className="graySection">
			<div className="contentSection">
				<h4 id="scroll-link-2">Additional Experience</h4>
				<div>
					<h5 className="sectionHeader">Hackathons</h5>
					<div className="extracurricularSection">
						{extracurriculars.hackathons.map((hackathon) => {
							return (
								<div className="extracurricular" key={hackathon.name}>
									<p className="name">{hackathon.name}</p>
									<p className="title">{hackathon.title}</p>
									<p className="date">{hackathon.date}</p>
									<span className="description">{hackathon.description}</span>
									<a href={hackathon.readMoreLink} target="_blank" rel="noopener noreferrer">Read More<span>&rsaquo;</span></a>
								</div>
							)
						})}
					</div>
					<h5 className="sectionHeader">Conferences</h5>
					<div className="extracurricularSection">
						{extracurriculars.conferences.map((conference) => {
							return (
								<div className="extracurricular" key={conference.name}>
									<p className="name">{conference.name}</p>
									<p className="title">{conference.title}</p>
									<p className="date">{conference.date}</p>
									<span className="description">{conference.description}</span>
									<a href={conference.readMoreLink} target="_blank" rel="noopener noreferrer">Read More<span>&rsaquo;</span></a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>        
	);
}

export default Extracurriculars;