import React from "react";

function article_1() {
	return {
		date: "March 2023 - Present",
		title: "HITCH",
		description:
			"Designing and working at start up based at the University of Massachusetts.",
		style: ``,
		keywords: [
			"HITCH",
			"HITCH ride sharing",
			"ride sharing ",
			"University of Massachusetts Amherst",
			"Abhijit",
			"Abhijit Ajit Kamath",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						"I have been actively involved in designing Hitch's
						mobile application UI in Figma, while also contributing
						to social media advertising and crafting a robust
						marketing strategy. With recent funding of{" "}
						<b>
							<u>$10,000</u>
						</b>
						, we aim to improve our final design and begin to
						develop a prototype in React Native. We hope to
						participate in Umass' annual innovation challenge,
						offering a prize pool of{" "}
						<b>
							<u>$65,000</u>
						</b>
						. Currently, we are in the final stages of refining our
						UI/UX and building our market research.
					</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: " March 2023 - Present",
		title: "Mathspring| Center for Knowledge Communication Lab @ Umass",
		description: "Lab volunteer and designer",
		keywords: [
			"Mathspring",
			"Abhijit",
			"Abhijit Ajit Kamath",
			"Center for Knowledge communication labb",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						I worked with a lab at Umass to create and improve their
						database of questions for Mathspring portal that helps
						students get better at mathematics using an AI model to
						suggest questions to challenge students. I also helped
						to design the UI for the lab. I hope to eventually work
						on writing API's for the laboratory and to build the
						authoring tool.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Jan 2023 - Present",
		title: "University Programming Council",
		description: "Street Team Lead",
		style: ``,
		keywords: [
			"UPC",
			"University Programming Club",
			"umass",
			"University of Massachusetts Amherst",
			"Abhijit",
			"Abhijit Ajit Kamath",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						I've been volunteering with the UPC to put up events for
						the student body at Umass. I'll be joining their
						marketing and tabling team to improve their outreach to
						the student body.
					</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "Sep 2022 - May 2023",
		title: "FRESHCICS",
		description: "President and the chair of Logistics",
		style: ``,
		keywords: [
			"FRESHCICS",
			"UMASS",
			"University of Massachusetts Amherst",
			"Abhijit",
			"Abhijit Ajit Kamath",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Our goal with the freshCICS team was to help build a
						sense of belonging and celebrating the community of
						students enrolled in the College of Information and
						Computer Sciece (CICS) at Umass. We held social events
						for students to connect and collaborate with each other,
						research nights, career information sessions. We even
						planned out multicultural events to commemorate the
						diversity in our student population. I worked with a
						team of 4 students. We organised and collaborated with
						different departments and people.
					</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}
const myArticles = [article_1, article_2,article_3, article_4];

export default myArticles;
