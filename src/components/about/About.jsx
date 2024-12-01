import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
	INFO_MESSAGE,
	JOURNEY_LIST,
	MOBILE_INFO_MESSAGE,
} from "../../helpers/const";
import AboutItem from "./AboutItem";
import Section from "../reusable/Section";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";

/*
	Journey timeline
*/

const About = () => {
	const mappedJourney = JOURNEY_LIST.map((journey, key) => (
		<div className="about__journeys" key={key}>
			<AboutItem
				start={key === 0}
				end={key === JOURNEY_LIST.length - 1}
				reversed={key % 2 === 0}
				journey={journey}
				key={uuidv4()}
			/>
		</div>
	));

	return (
		<div className="about  f-c-st-st">
			<Section
				id="about"
				title="About me"
				className="fs-250 mg-r-10"
				subtitle="Who am I?"
				icon={["fas", "user-graduate"]}
			>
				<p>
					I hold a Master’s degree in Software Engineering, earned from the
					University of Rennes 1 in France. With 2 years of experience as a Full
					Stack Developer, I have honed my skills in building robust and efficient
					applications. I am fluent in French and English, in addition to my native
					language, enabling me to work and adapt in multicultural environments.
				</p>
			</Section>

			<span className="container pd-b-25">
				<Icon className="fs-140 blue mg-r-10" icon={["fas", "info-circle"]} />
				{isMobile ? (
					<p className="tx-ce fs-120">{MOBILE_INFO_MESSAGE}</p>
				) : (
					<p className="tx-ce fs-120">{INFO_MESSAGE}</p>
				)}
			</span>
			{mappedJourney}
		</div>
	);
};

export default About;
