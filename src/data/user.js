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
		linkedin: "https://www.linkedin.com/in/abhijit-kamath-227b63245/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		discord: "AAK#1098",
	},

	homepage: {
		title: "Software Engineer, designer, tech enthusiast",
		description:
			"I am a budding software engineer who is pursuing a Honors Computer Science and Mathematics double major at the University of Massachusetts Amherst. I am exploring full stack development and I also have keen interest in Machine learning, finance, and designing",
	},

	about: {
		title: "I’m Abhijit Ajit Kamath. Building my dreams from Amherst, MA.",
		description:
			"I began programming about a year ago. I am a passionate problem solver and love taking on a challenge. I am currenlty exploring web and mobile development",
	},

	articles: {
		title: "I am passionate about connecting with people and seeking avenues for collaborative growth.",
		description:
			"Here are a couple of Groups and projects that I am passionate about.",
	},

	pastEmployers:["Fintoo","Reliance Industries","Resource Economics @ umass","IT consultant"],

	workExperience: [
		{
			Employer: "Fintoo",
			jobTitle: "Full Stack Software Engineer",
			date: "June 2023 - July 2023",
			description:["Developed a login/registration page using React, Django, and styled using CSS by collaborating with a team of developers","Built a RESTful CRUD API and implemented JWT token-based authentication to ensure robust user identity verification, authorization, and security","Leveraged Django Rest Framework and SQL by building models and serializers, optimizing the processing of user input"],
			skills: "Django, Django Rest Framework, React, Axios, JWT Tokens, SQL"
		},
		{
			Employer: "Reliance Industries (Youth Sport department)",
			jobTitle: "Data Analyst",
			date: "August 2023 - September 2023",
			description:["Spearheaded a data optimisation initiative by automating the data retrieval process through webscraping using BeautifulSoup4 python Library, resulting in an 100% increase in efficiency","Applied data preprocessing techniques to clean and format raw sports data using Pandas python Library, transforming it into a structured and usable format.","Contributed to enhancing athlete performance for international competitions, including the Asian Games 2023."],
			skills: "Python, Pandas, Seaborn, Beautiful Soup"
		},
		{
			Employer: "Resource Economics Department @ UMass Amherst",
			jobTitle: "Research Assistant",
			date: "Jan 2024 - present",
			description:["Currently working with Prof. Christian Rojas to build PostgreSQL database","Wrote a script in python to build a robust and efficient data pipeline that extracts data by crawling files and loads the data into the right tables of database"],
			skills: "Python, postgeSQL"
		},
		{
			Employer: "IT consultant",
			jobTitle: "University of Massachusetts Amherst",
			date: "Oct 2022 - present",
			description:["Diagnosed and resolved Account management, Networking, and software issues","Communicated with clients through different mediums such as email triage, walk-ins, and live chat support."],
			skills: "Python, postgeSQL"
		}
	],

	projects: [
		{
		title: "Amherst Education Foundation Website | NextJs, ExpressJS, AWS, MongoDB ",
		date: "Dec 2023 - Present",
		description:
			"• Developed a REST API with Express to facilitate image storage in an AWS S3 Bucket, manage static website content, and store raw Markdown content in MongoDB.\
			 • Designed an intuitive Markdown Editor to empower non-technical staff in customizing and formatting blogs effectively.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		linkText: "View Project",
		link: "https://github.com/mgpai22/ergo-explorer",
		},
		{
		title: "ERGO Explorer | NextJs, TailwindCSS, Axios",
		date: "Dec 2023 - Present",
		description:
			"• Engineered a template and built custom UI components in NextJs styled using tailwind CSS.\
			 • Built dynamic cohesive components and integrated Ergo node API.\
			 • Learnt about UTxO blockchain infrastructure",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		linkText: "View Project",
		link: "https://github.com/mgpai22/ergo-explorer",
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
		{
			title: "Login/Registration CRUD Application | Django, React",
			date: "June - July 2023",
			description:
				"Built a CRUD page with JWT authentication using Python and Javascript.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/abhijit360/Login-Registration-API-Backend",
		},
		{
			title: "Data Retrieval, Analysis, visualisation | Python, BeautifulSoup4, Pandas, Seaborn and Matplotlib",
			date: "",
			datee: "August - September 2023",
			description:
				"Webscraped and cleaned data and formatted it into a CSV file. Visualised the data using seaborn and Matplotlib",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/abhijit360/Login-Registration-API-Backend",
		},

		{
			title: "Data Retrieval API with MySQL Database | Django, SQL",
			date: "",
			description:
				"Built an GET/POST API and wrote raw SQL queries to integrate into a MySQL database",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/abhijit360/API-SQL",
		},

		{
			title: "TurtleSplash | python",
			date: "",
			description: "Wrote a game using the pygame library in python.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/abhijit360/TurtleSplash",
		},

		{
			title: "Food Delivery React Page | React.js, CSS",
			date: "",
			description:
				"I built an interactive page in React.js and added my custom styling in css as part of an Udemy Course",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/abhijit360/React-Food-DeliveryApp",
		},

		{
			title: "Hitch",
			description: "Designed the UI for a ride sharing application.",
			date: "",
			logo: "./FigmaLogo.png",
			linkText: "Read more about my work",
			link: "/Involvements",
		},
		{
			title: "Kinsei",
			date: "",
			description: "Designed a website for a NFT minting service",
			logo: "./FigmaLogo.png",
			linkText: "",
			link: "",
		},
	],
};

export default INFO;
