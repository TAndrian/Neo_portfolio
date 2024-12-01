import devTeamAnimation from "../assets/lotties/dev-team.gif";
import devFreelanceAnimation from "../assets/lotties/dev-freelance.gif";
import studentAnimation from "../assets/lotties/student.gif";
import teamwork_lottie from "../assets/lotties/teamwork_lottie.gif";
import achalander from "../assets/journey/achalander.png";
import singer from "../assets/journey/singer.png";
import istic from "../assets/journey/istic.jpg";
import sopraSteria from "../assets/journey/sopraSteria.png";

/**
 * Export constants from here
 */
const SOCIALS = [
	{
		title: "Visit my github profile!",
		link: "https://github.com/TAndrian",
		icon: ["fab", "github"],
		target: "_blank",
	},
	{
		title: "Add me on Linkedin",
		link:
			"https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/",
		icon: ["fab", "linkedin-in"],
		target: "_blank",
	},
	{
		title: "Send me an email!",
		link: "mailto:t.andrian.rak@gmail.com",
		icon: ["fas", "envelope"],
		target: "_self",
	},
];

const JOURNEY_LIST = [
	{
		image: sopraSteria,
		establishment: "Sopra-Steria",
		location: "Cesson-Sévigné, France",
		about:
			" My role encompassed end-to-end responsibilities, from analyzing requirements and designing solutions to developing and deploying features using Java, Spring Boot, and Angular.",
		position: "C.D.I.",
		duration: "~ 2 years",
		date: "January 2023 - December 2024",
		description:
			"At Sopra-Steria, I contributed to the Vélo Libre-Service project as a full-stack developer, " +
			"\n" +
			"focusing on designing, developing, and deploying solutions using Java, Spring Boot, and Angular. " +
			"\n" +
			"Working in Agile Scrum, I honed my technical and collaboration skills while delivering high-quality results. " +
			"\n" +
			"This role strengthened my expertise in CI/CD, teamwork, and software development.",
		icon: ["fas", "laptop"],
		lottie: teamwork_lottie,
	},
	{
		image: achalander,
		establishment: "Achalander.com",
		location: "Paris, France",
		about:
			"My task as an intern was mainly focused on fixing various bugs and adding new features to the application.",
		position: "Internship",
		duration: "7 months",
		date: "April 2022 - October 2022",
		description:
			"This is my first internship and my first real job where I could make use of my skills. " +
			"Although I've had no knowledge about PHP and Symfony, and SQL, during my interview I mentioned that I am ready to " +
			"learn and challenged myself to apprehend them within a week!",
		icon: ["fas", "laptop"],
		lottie: devTeamAnimation,
	},
	{
		image: singer,
		establishment: "Aventure Couture",
		location: "Rennes, France",
		about:
			"As developer freelancer, my task was to conceive and design a web page dedicated for a sewing machine store.",
		position: "Freelance",
		duration: "3 months",
		date: "December 2021 - February 2022",
		description:
			"Aware of the fact that what I learn at the university will not be enough, I decided to look after some freelance jobs." +
			"\n" +
			"It was a friend of mine who proposed the job, therefore I had the chance to use some of my skills and learn at the same" +
			"\n" +
			"time with a front end senior developer who worked remotely by my side.",
		icon: ["fas", "code-branch"],
		lottie: devFreelanceAnimation,
	},
	{
		image: istic,
		establishment: "University",
		location: "Rennes, France",
		about: "I have learned from the one of the finest Universities in Rennes.",
		position: "Student",
		duration: "7 years",
		date: "2015 - 2022",
		description:
			"My journey began at 15, repairing and customizing old computers, which sparked my passion for technology. " +
			"\n" +
			"Eager to deepen my knowledge, I pursued software engineering at the University of Rennes 1.",
		icon: ["fas", "book-open-reader"],
		lottie: studentAnimation,
	},
];

const FRONT_END_LIST = [
	{
		name: "React",
		description:
			"I must admit it, this framework (I mean library 😉) is underrated! This is the best JS framework I have ever used and yet, " +
			"it holds many secrets yet to be discovered.",
		color: "rgb(34, 34, 34)",
	},
	{
		name: "NextJS",
		description:
			"An SSR technology extension to react. One of the best tools to create a universal app or Single Page Application.",
		color: "black",
	},

	{
		name: "VueJS",
		description:
			"Looking for the best progressive framework and yet easy to learn? VueJS is made for you! Everything you see nowadays is mostly displayed with VueJS.",
		color: "rgb(126, 255, 100)",
	},
	{
		name: "Angular",
		description:
			"My first JS framework. One of the best tools for building SOLID 😉 and well structured web app. This is why it is the number one front end framework for big companies.",
		color: "#f20505",
	},
];

const BACK_END_LIST = [
	{
		name: "Spring Boot",
		description: "Just like JavaScript, Java has also its own framework.",
		color: "#d3ebce",
	},
	{
		name: "Express",
		description:
			"One of the most popular Javascript back end framework nowadays to conceive RESTFUL APIs. I have learned it and I can tell, " +
			"it was amazing and easy to understand!",
		color: "#e6ecf5",
	},
	{
		name: "NodeJS",
		description:
			"A cross platform JavaScript runtime which runs on the chrome's V8 engine. Thanks to it, it is now possible to build back end written with JavaScript.",
		color: "#e6ecf5",
	},
	{
		name: "Symfony",
		description:
			"Talking about frameworks that run under PHP, Symfony is among of the best! " +
			"It supports O.O.P, RESTful APIs and also front end friendly. Need a simple but pretty back office? Do not look any further! Symfony has it all thanks to its various bundles.",
		color: "rgb(34, 34, 34)",
	},
];

const DATABASE_LIST = [
	{
		name: "MongoDB",
		description:
			"A NoSql and document-oriented database program. I like to use it when it comes to conceive a Minimum Viable Product application.",
		color: "#065227",
	},
	{
		name: "MySql",
		description:
			"When it comes to managing a relational database system, SQL is always the best option." +
			"Combined with a tool which converts data to dashboards and reports, SQL is a must to become a successful data scientist!",
		color: "#231354",
	},
	{
		name: "MariaDB",
		description:
			"Just like MySQL and PostgreSQL, MariaDB is an open-source relational database management system (RDBMS) that originated as a fork of MySQL.",
		color: "#ffffff",
	},
	{
		name: "PostgreSQL",
		description:
			"PostgreSQL, an open-source and advanced relational database management system (RDBMS) known for its robustness, scalability, and standards compliance." +
			"No wonder if it is always chosen by large company !",
		color: "#2038b2",
	},
	{
		name: "Liquibase",
		description:
			"Designed for continuous integration and delivery (CI/CD) workflows and supports multiple databases like PostgreSQL, MySQL, MariaDB, and Oracle, " +
			"Liquibase is the best choice to track, version and deploy database changes across environments.",
		color: "#87c2dc",
	},
];

const OTHER_LIST = [
	{
		name: "Docker",
		description:
			"Even though I am not a DevOps engineer and do not have a deep knowledge about docker, this technology still fascinates me.",
		color: "#1698f5",
	},
	{
		name: "Keycloak",
		description:
			"Keycloak offers you the identity and access management solution in the most E A S Y way ever!",
		color: "#ffffff",
	},
];

const NEXT_TECH_LIST = [
	{
		name: "Nuxt",
		description:
			"Just like Next, Nuxt, an SSR extension of VueJS, is a powerful tool and it becomes more and more popular nowadays.",
		color: "rgb(34, 34, 34)",
	},
	{
		name: "NestJS",
		description:
			"To make it simple, it is the combo of Spring Boot and Nodejs in one framework, and I like that!",
		color: "black",
	},
	{
		name: "AWS",
		description:
			"I am interested in learning cloud computing platform which offers a wide range of services including compute power as" +
			"EC2, storage as S3 and database as RDS!",
		color: "white",
	},
];

const PROGRAMING_LANGUAGE_LIST = [
	{
		name: "Java",
		description:
			"Old but gold! Secured and statically-typed! O.O.P in the arsenal! And even more.. That is why Java is loved by big companies.",
		color: "#d0dff7",
	},
	{
		name: "JavaScript",
		description:
			"Compared to Java, this one was quite easy to learn. Although Java is very solid and holds many features which far exceed Javascript.",
		color: "rgb(238, 202, 0)",
	},
	{
		name: "Typescript",
		description:
			"As a superset of Javascript, it adding types to a consistent scalable code and avoid bad surprises! I like to use it when a big project is coming in.",
		color: "rgb(25, 46, 108)",
	},
	{
		name: "Php",
		description:
			"Thought PHP is dead? Well sorry to disappoint ya!" +
			"There are still many web apps and CMS tools out there which runs under Php, and it is loved by the start ups.",
		color: "#734dd1",
	},
	{
		name: "HTML 5",
		description:
			"The foundation of the web itself, a markup language that has evolved though the years along with the internet.",
		color: "rgb(230, 75, 35)",
	},
	{
		name: "CSS3",
		description:
			"I like good looking apps! That is why I make use of the best styling features of CSS.",
		color: "rgb(67, 124, 213)",
	},
	{
		name: "SASS",
		description:
			"As the D.R.Y itself said: Do not Repeat Yourself! SASS is considerably speeding styles production and enforces better " +
			"codebase when it comes to designing apps from scratch.",
		color: "rgb(174, 59, 160)",
	},
	{
		name: "SQL",
		description:
			"El senior of standardized programming language used to manage and manipulate relational databases.",
		color: "#ffffff",
	},
];

const TEST_FRAMEWORK_LIST = [
	{
		name: "Mockito",
		description:
			"When it comes to ensure Java application's robustness, Mockito is always the most used testing framework for creating mock objects and verifying behavior in unit tests. ",
		color: "rgb(56,55,55)",
	},
	{
		name: "JUnit",
		description:
			"JUnit 5 is a testing framework for Java that provides a comprehensive model for writing and running tests.",
		color: "black",
	},
	{
		name: "Jasmine",
		description:
			"Jasmine, a behavior-driven development (BDD) testing framework for JavaScript and Angular's best friend. " +
			"It provides syntax for writing clear and readable tests, focusing on test assertions, " +
			"mocks, and spies.",
		color: "#ffffff",
	},
	{
		name: "Testcontainers",
		description:
			"Ideals with integration testing, It allows you to spin up lightweight, disposable containers for services like databases, message brokers, and web servers, ensuring isolated and repeatable tests.",
		color: "#d5d7da",
	},
];

const PROJECT_MANAGEMENT = [
	{
		name: "JIRA",
		description:
			"A very well organized and well orchestrated team is the key of success for every company.",
		color: "#0b14b8",
	},
	{
		name: "Confluence",
		description:
			"When you work with a large team, you always need a collaboration and documentation platform. That's where Confluence comes in!",
		color: "#1f2698",
	},
	{
		name: "GitHub",
		description:
			"A good choice for version control and collaboration which uses Git to manage code Repositories.",
		color: "#e2e6e8",
	},
	{
		name: "GitLab",
		description: "Just like GitHub, GitLab is ideals for team collaboration.",
		color: "#ec9b9b",
	},
	{
		name: "Git",
		description:
			"The version control system currently used by every developer and DevOps. It will make your project's works like magic!",
		color: "#e8e8e8",
	},
	{
		name: "Google data studio",
		description:
			"Speaking of which! Google Data Studio and its features bring the perfect conception for your dashboards and reports for supervising the evolution of your business.",
		color: "#e8e8e8",
	},
];

const MOBILE_INFO_MESSAGE = "Tap on the card to view its details.";
const INFO_MESSAGE = "Hover on the card to view its details.";

export {
	SOCIALS,
	JOURNEY_LIST,
	FRONT_END_LIST,
	BACK_END_LIST,
	DATABASE_LIST,
	OTHER_LIST,
	NEXT_TECH_LIST,
	MOBILE_INFO_MESSAGE,
	INFO_MESSAGE,
	PROGRAMING_LANGUAGE_LIST,
	TEST_FRAMEWORK_LIST,
	PROJECT_MANAGEMENT,
};
