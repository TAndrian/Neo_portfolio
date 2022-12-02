import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Anime from "animejs";
import { SOCIALS } from "../../helpers/const";

/*
	Bottom part of home cover
*/

const mappedSocial = SOCIALS.map(({ link, title, icon, target }) => (
	<li className="mg-l-10 mg-r-10" key={uuidv4()}>
		<a className="link white fs-300 tr-200" href={link} title={title} rel="noreferrer"
				target={target}>
			<Icon icon={icon} />
		</a>
	</li>
));

const CoverBottom = () => {
	useEffect(() => {
		Anime({
			targets: ".cover-bottom__separator",
			width: "60%",
			easing: "spring(1, 80, 5, 0)",
			delay: 2000,
		});
	}, []);
	return (
		<div className="cover-bottom w-100 h-20 f-c-ce-st o-h">
			<div className="cover-bottom__separator bg-white mg-a"></div>
			<ul className="cover-bottom__social w-100 f-r-ce-ce">{mappedSocial}</ul>
		</div>
	);
};

export default CoverBottom;
