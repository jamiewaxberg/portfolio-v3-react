import React from 'react';

const extracurriculars = {
	hackathons: [
		{
			name: 'Craftsy & Bluprint Internal Hackathons',
			title: 'Lead Organizer',
			date: 'April 2018 & 2019',
			description: 'For two consecutive years, I organized and participated in internal hackathons with our Engineering department at Craftsy/Bluprint. These hackathons were an exiciting opportunity for individuals to take a break from their regular project work and team up with engineers that they wouldn\'t normally work with to build passion projects they had always dreamt of building within the context of the company\'s product offering. Each team was responsible for building an MVP prototype of a feature and pitching to a panel of judges, which were a combination of employees from other departments and users. Several of the features built during both hackathons were eventually expanded upon and introduced into the Craftsy & Bluprint products.'
		},
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
			name: 'Women Impact Tech',
			place: 'Denver',
			date: 'November 2019',
			description: 'Women Impact Tech provides an exclusive chance to network with leaders at top tech companies committed to inclusivity and innovation. I connected with other top female software engineers in Denver, and gained industry insight through attending keynotes, breakout sessions, and panels featuring prominent female leaders in tech.',
			readMoreLink: 'https://womenimpacttech.com/event/denver2019'
		},
		{
			name: 'JazzCon.Tech',
			place: 'New Orleans',
			date: 'March 2017',
			description: 'JazzCon.Tech is one of the Southeast’s premier annual conferences dedicated to JavaScript, Web and Mobile related technologies, tools, and frameworks. JazzCon.Tech features presentations and workshops from global technology and thought leaders as well as local community speakers. I attended a full day of React workshops and attended many React and JavaScript focused sessions.',
			readMoreLink: 'http://jazzcon.tech/'
		},
		{
			name: 'HTML5Devconf',
			place: 'San Francisco',
			date: 'October 2015',
			description: 'HTML5Devconf is the largest gathering of technical software developers, designers and decision makers in the world focused on Internet software technologies such as JavaScript, HTML5, CSS, node.js and other cross platform web, mobile and server technologies. I attended React and JavaScript workshops and sessions on a wide variety of subjects.',
			readMoreLink: 'http://html5devconf.com/'
		}
	]
}

function Extracurriculars() {
	function RenderReadMore(hackathon) {
		const hasReadMore = hackathon.readMoreLink;
	    let readMoreLink;

	    if (hasReadMore) {
	    	readMoreLink = <a href={hackathon.readMoreLink} target="_blank" rel="noopener noreferrer">Read More<span>&rsaquo;</span></a>;
	    } else {
	    	return;
	    }

	    return readMoreLink;
	}

	return (
		<div id="adtl-exp" className="graySection">
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
									{RenderReadMore(hackathon)}
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
									<p className="place">{conference.place}</p>
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