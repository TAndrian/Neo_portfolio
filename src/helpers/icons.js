import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedinIn,
	faUikit,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBars,
	faBookOpenReader,
	faCalendarAlt,
	faClock,
	faClover,
	faCode,
	faCodeBranch,
	faDatabase,
	faEnvelope,
	faGlobe,
	faLaptop,
	faLaptopCode,
	faLayerGroup,
	faMapMarkedAlt,
	faRocket,
	faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;
library.add(
	faGithub,
	faLinkedinIn,
	faEnvelope,
	faUserGraduate,
	faLaptopCode,
	faBars,
	faLaptop,
	faClover,
	faBookOpenReader,
	faClock,
	faMapMarkedAlt,
	faCalendarAlt,
	faCodeBranch,
	faUikit,
	faCode,
	faDatabase,
	faLayerGroup,
	faRocket
);
