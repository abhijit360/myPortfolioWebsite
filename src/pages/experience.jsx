import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import Works from "../components/about/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const[viewExperience,setViewExperience] = useState(0);
	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
							
								<div className="title about-title">
									{INFO.about.title}
								</div>

				
									<div className="subtitle about-subtitle">
										{INFO.about.description}
									</div>

								<div className="work-container">
									<div className="work-employers-list">
										{
											INFO.pastEmployers.map((employer, index)=>(
												<span key={index} className={viewExperience == index ? "work-employer-name-selected" : "work-employer-name"} key={index} onClick={() =>{
													setViewExperience(index)
												}}>{employer}</span>
											))
										}
									</div>
									<div>
										{
											INFO.workExperience.filter((val, index)=> index ==viewExperience).map((experience, index) => {
												return(
													<div>
														<div className="work-experience-container">
															<div style={{display: "flex", flexDirection:"row", alignItems: "center", rowGap: "5px", columnGap:"10px", flexWrap:"wrap"}}>
																<p className="work-experience-title">{experience.jobTitle}</p>
																<p className="work-experience-date">{experience.date}</p>
															</div>
															<div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", alignItems: "center", gap: "10px"}} >
																{experience.skills.split(",").map((skill) =>(<span className="skill-container">{skill}</span>))}
															</div>
															
															<div>
															{
															experience.description.map((desc, index) =>(
																<>
																<div style={{display: "flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
																	<div className="icon"></div>
																	<p className="work-experience-description">{desc}</p>
																</div>
																</>
															))
															}
															</div>
															
															
					
														</div>
													</div>
												)})
										}
									</div>
								</div>
								
								{/* <div className="about-works">
									<Works />
								</div> */}

								<div className="about-socials">
									<Socials />
								</div>

					

					
						<div className="about-works-mobile">
							<Works />
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
