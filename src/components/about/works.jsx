import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">

							<img
								src="./briefcase.png"
								alt="Fintoo logo"
								className="work-image"
							/>
							<div className="work-title">Fintoo</div>
							<div className="work-subtitle">
								Junior Software Engineer
							</div>
							<div className="work-duration">June 2023 - July 2023</div>
						</div>

						<div className="work">
							<img
								src="./UmassLogo.png"
								alt="Umass Amherst logo"
								className="work-image"
							/>
							<div className="work-title">IT service</div>
							<div className="work-subtitle">
								Tier 1 service Desk attendant
							</div>
							<div className="work-duration">Oct 2022 - May 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
