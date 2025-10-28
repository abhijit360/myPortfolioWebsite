import React from "react";
import { useState } from "react";
// Using anchor links for single-page navigation

import "./styles/navBar.css";

const NavBar = (props) => {
	const sections = ["home", "experience", "projects", "contact"]
	const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0)
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							{sections.map((section, index) => (
								<li
									className={
										index === currentSelectionIndex
											? "nav-item active"
											: "nav-item"
									}
									onClick={() => setCurrentSelectionIndex(index)}
								>
									<a href={`#${section}`}>{section}</a>
								</li>
							))}		
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
