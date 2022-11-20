import devTeamAnimation from "../assets/lotties/dev-team.gif";
import devFreelanceAnimation from "../assets/lotties/dev-freelance.gif";
import studentAnimation from "../assets/lotties/student.gif";
import achalander from "../assets/journey/achalander.png";
import singer from "../assets/journey/singer.png";
import istic from "../assets/journey/istic.jpg";

/**
 * Export constants from here
 */
const SOCIALS = [
	{
		title: "Visite my github profile!",
		link: "https://github.com/TAndrian",
		icon: ["fab", "github"],
	},
	{
		title: "Add me on Linkedin",
		link:
			"https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/",
		icon: ["fab", "linkedin-in"],
	},
	{
		title: "Send me an email!",
		link: "mailto:t.andrian.rak@gmail.com",
		icon: ["fas", "envelope"],
	},
];

const JOURNEY_LIST = [
	{
		image: achalander,
		establishment: "Achalander.com",
		location: "Paris, France",
		about:
			"My task as intern was mainly focused on fixing various bugs and adding new features to the application.",
		position: "Internship",
		duration: "7 months",
		date: "April 2022 - October 2022",
		description:
			"This is my first internship and my first real job where I could make use of my skills.\
			 Although I've had no knowledge about Php and Symfony and SQL, \
			 during my interview I mentionned that I am ready to learn and challenged myself to apprehend them within a week !",
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
			"Aware of the fact that what I learn at the university will not be enough, I decided to look after some freelance jobs. \
			It was a friend of mine who proposed the job, therefore I had the chance to use some of my skills and learn at the same \
			time with a front end senior developer who worked remotely by my side.",
		icon: ["fas", "code-branch"],
		lottie: devFreelanceAnimation,
	},
	{
		image: istic,
		establishment: "University",
		location: "Rennes, France",
		about: "I have learn from the one of the finest university in Rennes.",
		position: "University - student",
		duration: "",
		date: "2015 - 2022",
		description:
			"It all begins when I started to repare and customize junk computers back when I was 15 years old. \
			After getting some knowledges about hardware, I decided to level up my knowledge and become a software engineer. \
			So I started my journey in France at the University of Rennes 1 to learn more about algorithmes, algebras, programming language, etc... \
			and finaly become a software engineer.",
		icon: ["fas", "book-open-reader"],
		lottie: studentAnimation,
	},
];

const FRONT_END_LIST = [
	{
		name: "React",
		description:
			"I must admit it, this framework (I mean library 😉) is underated ! This is the best JS framework I have ever used and yet, \
			it holds many secrets yet to be discovered.",
		color: "rgb(34, 34, 34)",
	},
	{
		name: "NextJS",
		description:
			"An SSR technology extension to react. One of the best tool to create an universal app or Single Page Application",
		color: "black",
	},

	{
		name: "VueJS",
		description:
			"Looking for the best progressive framework and easy to learn ? VueJS is made for you ! Mostly, everything you see here nowadays is displayed with VueJS.",
		color: "rgb(126, 255, 100)",
	},
	{
		name: "Angular",
		description:
			"My first JS framework. One of the best tool for building solid and well structured web app",
		color: "#f20505",
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
			"I like elegant apps ! That is why I make use of the best styling features of CSS.",
		color: "rgb(67, 124, 213)",
	},
	{
		name: "SASS",
		description:
			"As the D.R.Y itself said : Do not Repeat Yourself ! SASS is considerably speeding styles production and enforces better \
			codebase when it comes to designing apps from scratch.",
		color: "rgb(174, 59, 160)",
	},
];

const BACK_END_LIST = [
	{
		name: "Express",
		description:
			"One of the most popular Javascript back end framework nowadays to conceive RESTful APIs. I have learned it and I can tell, \
			it was amazing and easy to understand!",
		color: "#e6ecf5",
	},
	{
		name: "Javascript",
		description:
			"Compared to Java, this one was quite easy to learn. Though Java is very solid and holds many features which exceed Javascript.",
		color: "rgb(238, 202, 0)",
	},
	{
		name: "Typescript",
		description:
			"As a superset of Javascript, it's adding types to a consistent scalable code and avoid suprises ! I like to use it when a big project is coming in.",
		color: "rgb(25, 46, 108)",
	},
	{
		name: "NodeJS",
		description:
			"A cross platfrom JavaScript runtime which runs on the chrome's V8 engine. Thanks to it, it is now possible to build back end written with JavaScript.",
		color: "#e6ecf5",
	},
	{
		name: "Java",
		description:
			"Old but gold ! Secure and statically-typed ! O.O.P in the arsenal ! And even more... That is why it Java is loved by big companies.",
		color: "#d0dff7",
	},
	{
		name: "Springboot",
		description: "Just like JavaScript, Java has also it's own framework.",
		color: "#d3ebce",
	},
	{
		name: "Php",
		description:
			"Thought Php is dead ? well sorry to disapoint ya. \
			There are still many web apps and CMS tools out there which runs under Php and it is loved by the start ups.",
		color: "#734dd1",
	},
	{
		name: "Symfony",
		description:
			"Talking about frameworks that runs under Php, Symfony among of the best ! It supports O.O.P, RESTful API. Need a simple but pretty back office ? Do not look any further ! Symfony has it all.",
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
		name: "My Sql",
		description:
			"When it comes to manage a relationnal database system, SQL is always the best option. \
			Combined with a tool which convert datas into dashboards and reports, SQL is a must to become a successful data scientist !",
		color: "#231354",
	},
];

const OTHER_LIST = [
	{
		name: "Google data studio",
		description:
			"Speaking of witch ! Google Data Studio and its features brings the perfect dashboards and reports for supervising the evolution of your business.",
		color: "#e8e8e8",
	},
	{
		name: "Git",
		description:
			"The version controle system currently used by every developers and devops. It will make your projects' workflow works like magic !",
		color: "#e8e8e8",
	},
	{
		name: "JIRA",
		description:
			" A very well organized and well orchestred team is the key of success for every company. Familiar with the agile software development ? JIRA is for you !",
		color: "#0b14b8",
	},
	{
		name: "Docker",
		description:
			"Even though I am not a DevOps engineer and do not have a deep knowledge about docker, this technology still fascinates me.  I wanna learn more !",
		color: "#1698f5",
	},
];

const NEXT_TECH_LIST = [
	{
		name: "NestJS",
		description:
			"To make it simple, it is the combo of springboot and nodejs in one framework... and I like that !",
		color: "black",
	},
	{
		name: "Drupal",
		description:
			"A FREE CMS tool that runs under Php. The white house uses drupal, even Lady Gaga uses drupal ! So why not me ?",
		color: "#2d65c4",
	},
];

export {
	SOCIALS,
	JOURNEY_LIST,
	FRONT_END_LIST,
	BACK_END_LIST,
	DATABASE_LIST,
	OTHER_LIST,
	NEXT_TECH_LIST,
};
