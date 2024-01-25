import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, date, homePage} = props;
	const [descriptionVisibility, setDescriptionVisibility] = useState(false);
	let linkedIcon = [];
	if (link.length !== 0) {
		linkedIcon.push(
			<div className="project-link">
				<div className="project-link-icon">
					<FontAwesomeIcon icon={faLink} />
				</div>
				<div className="project-link-text">{linkText}</div>
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div onMouseEnter={()=>{setDescriptionVisibility(true)}} onMouseLeave={()=>{setDescriptionVisibility(false)}}  className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title-date-container">
							<span className="project-title">{title}</span>
							<span className="project-date" style={date === "" ? {scale: 0,} : {scale:1}}>{date}</span>
						</div>
						
						
						{homePage && <div className={descriptionVisibility ? "project-description-visible" : "project-description-invisible"}>{description}</div>}
						{!homePage && <div className="project-description-visible">{description}</div>}
						{linkedIcon}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
