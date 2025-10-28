import React from "react";
// Single-page anchors for footer navigation

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<a href="#home">Home</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#experience">Experience</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#projects">Projects</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Abhijit Ajit Kamath. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
