import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
	faBars,
	faEnvelope,
	faLaptop,
	faLaptopCode,
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
	faLaptop
);
