import INFO from "./data/user";

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
