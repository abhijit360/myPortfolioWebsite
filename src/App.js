import { useState } from "react";
import INFO from "./data/user";
import stamp from "./data/lastEdit.json";

const { lastEdit } = stamp;

const LastEdit = () => (
	<p className="last-edit">
		Updated{" "}
		<time dateTime={lastEdit}>
			{/* Use the commit's own calendar date, not the viewer's timezone. */}
			{new Date(lastEdit.slice(0, 10)).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
				timeZone: "UTC",
			})}
		</time>
	</p>
);

const ThemeToggle = () => {
	const [theme, setTheme] = useState(
		() => document.documentElement.dataset.theme || "dark"
	);

	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("theme", next);
		} catch {}
		setTheme(next);
	};

	return (
		<button className="theme-toggle" onClick={toggle}>
			{theme === "dark" ? "Light mode" : "Dark mode"}
		</button>
	);
};

const Entry = ({ title, meta, tag, date, link, children }) => (
	<li className="entry">
		<div className="entry-head">
			<span className="entry-title">
				{link ? (
					<a href={link} target="_blank" rel="noreferrer">
						{title} ↗
					</a>
				) : (
					title
				)}
				{meta && <span className="muted"> · {meta}</span>}
				{tag && <span className="tag">{tag}</span>}
			</span>
			<span className="muted date">{date}</span>
		</div>
		{children}
	</li>
);

function App() {
	return (
		<main>
			<header>
				<div className="top-row">
					<LastEdit />
					<ThemeToggle />
				</div>
				<h1>{INFO.name}</h1>
				{INFO.intro.map((line) => (
					<p key={line}>{line}</p>
				))}
				<p className="about">{INFO.about}</p>
				<nav>
					<a href={INFO.github} target="_blank" rel="noreferrer">
						GitHub
					</a>
					<a href={INFO.linkedin} target="_blank" rel="noreferrer">
						LinkedIn
					</a>
					<a href={`mailto:${INFO.email}`}>Email</a>
				</nav>
			</header>

			<section>
				<h2>Experience</h2>
				<ul>
					{INFO.experience.map((job) => (
						<Entry
							key={job.company + job.date}
							title={job.company}
							meta={job.role}
							tag={job.fullTime && "Full-time"}
							date={job.date}
						>
							<p>{job.description}</p>
						</Entry>
					))}
				</ul>
			</section>

			<section>
				<h2>Projects</h2>
				<ul>
					{INFO.projects.map((project) => (
						<Entry
							key={project.title}
							title={project.title}
							date={project.date}
							link={project.link}
						>
							<p>{project.description}</p>
						</Entry>
					))}
				</ul>
			</section>

			<footer className="muted small">
				<a href={`mailto:${INFO.email}`}>{INFO.email}</a>
			</footer>
		</main>
	);
}

export default App;
