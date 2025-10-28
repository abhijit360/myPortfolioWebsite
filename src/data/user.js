// import FigmaLogo from "../../public/FigmaLogo.png"

const INFO = {
	main: {
		title: "Abhijit's Website",
		name: "Abhijit Ajit Kamath",
		email: "kamathabhijit2002@gmail.com",
		logo: "../AbhijitLogo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/abhijit360",
		linkedin: "https://www.linkedin.com/in/abhijit-kamath",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		discord: "AAK#1098",
	},

	homepage: {
		title: "Hello, I'm Abhi.",
		description: [
			"Software Engineer at LinkedIn, shaping the future of professional networking.",
			"Umass Amherst Bsc. Computer Science 2025",
			"📍Sunnyvale, CA",
		],
	},

	about: {
		title: "Tinkering away .",
	},

	articles: {
		title: "I am passionate about connecting with people and seeking avenues for collaborative growth.",
		description:
			"Here are a couple of Groups and projects that I am passionate about.",
	},

	pastEmployers: [
		"LinkedIn",
		"Flexcar",
		"Fintoo",
		"Vestmark",
		"Reliance Industries",
		"Resource Economics @ umass",
		"IT consultant",
	],

	workExperience: [
		{
			Employer: "LinkedIn",
			jobTitle: "Software Engineering Intern",
			date: "June 2025 - Sept 2025",
			description: [
				"Part of LinkedIn's Marketing Science team. Worked on an LLM based tool to automate insights from brand lift tests, enabling advertisers to identify optimization opportunities and improve campaign performance.",
			],
			skills: "Python, LangChain, Scala, ETL, gRPC, RPC, REST",
		},
		{
			Employer: "Flexcar",
			jobTitle: "Software Engineering Intern",
			date: "Jan 2025 - June 2024",
			description:
				"Built an internal tool with React and Rails to visualize data from 7,000+ customers, helping identify risky driving and lower insurance costs. Automated Slack alerts for telemetry faults to boost response times and reliability. Improved testing, fixed production issues, and enhanced developer tools for smoother workflows.",

			skills: "Typescript",
		},
		{
			Employer: "Vestmark",
			jobTitle: "Software Engineering Intern",
			date: "May 2024 - August 2024",
			description:
				"Built a Python tool to collect, clean, and visualize development data across 10+ teams, optimized with multi-threading and graph algorithms. Refactored a legacy Java toolkit to Python for a 15% performance boost. Generated Power BI reports to surface key metrics for project and funding decisions.",
			skills: "Python, Power BI, Data Analysis & ETL, API management, Scripting",
		},
		{
			Employer: "Fintoo",
			jobTitle: "Software Engineering Intern",
			date: "June 2023 - July 2023",
			description:
				"web development intern at Fintoo. Worked on their customer facing website",
			skills: "Django, Django Rest Framework, React, Axios, JWT Tokens, SQL",
		},
		{
			Employer: "Resource Economics Department @ UMass Amherst",
			jobTitle: "Research Assistant",
			date: "Jan 2024 - February 2025",
			description:
				"Wrote a scripts in Python to build a robust and efficient data pipeline that extracts data by crawling files and loads the data into the right tables of the database.",
			skills: "Python, PostgreSQL",
		},
	],

	projects: [
		{
			title: "Crypto Arbitrage Bot | Python, Binance API",
			date: "Oct 2025",
			description:
				"• Built a crypto arbitrage bot using Python and the Binance API to find arbitrage opportunities in the crypto market.",
		},
		{
			title: "LockIn | React, Webpack",
			date: "July 2024",
			description:
				"• 5 Active Users.\
				 • Seamless integration with Google calendar to help reduce the number of applications that I use to track my productivity.\
				 • Built a productivity tool using ReactJs and webpack to help track my time a little better.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
		{
			title: "ERGO Explorer | NextJs, TailwindCSS, Axios",
			date: "Dec 2023 - Feb 2024",
			description:
				"• Engineered a template and built custom UI components in NextJs styled using tailwind CSS.\
				 • Built dynamic cohesive components and integrated Ergo node API.\
				 • Learnt about UTxO blockchain infrastructure",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://ergo-explorer.vercel.app/",
		},
		{
			title: "SAS (period tracking application) | React Native, Expo",
			date: "Sept 2024 - Dec 2024",
			description:
				"Worked on features for the application like adding periods, tracking symptoms, and more. ",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/ducth1903/sas-period-tracker",
		},
		{
			title: "Amherst Education Foundation Website | NextJs, ExpressJS, AWS, MongoDB ",
			date: "Dec 2023 - March 2024",
			description:
				"• Developed a REST API with Express to facilitate image storage in an AWS S3 Bucket, manage static website content, and store raw Markdown content in MongoDB.\
			 • Designed an intuitive Markdown Editor to empower non-technical staff in customizing and formatting blogs effectively.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
		{
			title: "Crohns-Log | React Native, Beautifulsoup, ExpressJS",
			date: "November 2023",
			description:
				"• Designed and implemented a dynamic front-end built in React Native that leveraged the Context API for efficient App-wide state management.\
			 • Successfully scraped UMass Dining data and stored it in a PostgreSQL database hosted on Supabase. Created an ExpressJS RESTful API to ensure seamless access to the data.\
			 • Optimized deployment processes by containerizing the Express app using Docker, resulting in enhanced performance and efficiency when hosting on Linode server",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/Timmald/CLog/",
		},
	],
};

export default INFO;
