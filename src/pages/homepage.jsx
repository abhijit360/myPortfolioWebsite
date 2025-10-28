import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/about/works";
import Socials from "../components/about/socials";
import { ContactMeForm } from "../components/common/form";

import INFO from "../data/user";
import SEO from "../data/seo";
// Project tiles will be rendered inline in this page
// Single-page: use anchor links instead of router Links

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content" id="home">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description.map((description, index) => (
										<p key={index}>{description}</p>
									))}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="abhi.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						{/* Experience Section anchor */}
						<h1 id="experience">Experience</h1>
						<div className="experience-grid">
							{INFO.workExperience.map((experience, index) => (
								<div className="experience-tile" key={index}>
									<div className="company-name">
										{experience.Employer}
									</div>
									<div className="job-title">
										{experience.jobTitle}
									</div>
									<div className="date-range">
										{experience.date}
									</div>
									{experience.skills &&
										experience.skills.length > 0 && (
											<div className="skills-row">
												{experience.skills
													.split(",")
													.map((skill, i) => (
														<span
															className="skill-badge"
															key={i}
														>
															{skill.trim()}
														</span>
													))}
											</div>
										)}
									<p>{experience.description}</p>
								</div>
							))}
						</div>
						{/* Projects Section anchor */}
						<h1 id="projects">Projects</h1>
						<div className="projects-grid">
							{INFO.projects.map((project, index) => (
								<div key={index} className="project-tile">
									<div className="project-header">
										<div className="project-title">
											{project.title}
										</div>
										{project.date && (
											<div className="project-date">
												{project.date}
											</div>
										)}
									</div>
									<div className="project-summary">
										{project.description}
									</div>
									{project.link && (
										<div className="project-actions">
											<a
												href={project.link}
												target="_blank"
												rel="noreferrer"
											>
												{project.linkText ||
													"View Project"}
											</a>
										</div>
									)}
								</div>
							))}
						</div>
						{/* Contact Section anchor */}
						<h1 id="contact">Contact</h1>
						<p>
							I am always looking for new opportunities and
							collaborations. Feel free to reach out to me!
						</p>
						You can reach me at &nbsp;
						<a
							style={{ color: "white" }}
							href={`mailto:${INFO.main.email}`}
						>
							{INFO.main.email}
						</a>
						<div className="about-socials">
							<Socials />
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
