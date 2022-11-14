import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Social links
*/

const socialList = [
	{
		icon: ["fab", "github"],
		link: "#0",
		title: "Checkout my github profile!",
	},
	{
		icon: ["fab", "linkedin-in"],
		link:
			"https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/",
		title: "Follow me on linkedin",
	},
	{
		icon: ["fas", "envelope"],
		link: "mailto:t.andrian.rak@gmail.com?subject=Let's talk !",
		title: "Send me an email!",
	},
];

const mappedSocial = socialList.map((social) => (
	<li className="social__item" key={uuidv4()}>
		<a className="social__link tr-200" href={social.link} title={social.title}>
			<Icon icon={social.icon} />
		</a>
	</li>
));

const Social = () => <ul className="social">{mappedSocial}</ul>;

export default Social;
