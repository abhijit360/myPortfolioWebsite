import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="homepage-socials">
			<a href={INFO.socials.github} target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faGithub}
					className="homepage-social-icon"
				/>
			</a>
			<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
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
	);
};

export default Socials;
