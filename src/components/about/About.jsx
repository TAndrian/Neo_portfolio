import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { JOURNEY_LIST } from "../../helpers/const";
import AboutItem from "./AboutItem";

/*
	Journey timeline
*/

const About = () => {
	const mappedJourney = JOURNEY_LIST.map((journey, key) => (
		<Fragment key={key}>
			<AboutItem
				start={key === 0}
				end={key === JOURNEY_LIST.length - 1}
				reversed={key % 2 === 0}
				journey={journey}
				key={uuidv4()}
			/>
		</Fragment>
	));

	return <div className="about f-c-st-st">{mappedJourney}</div>;
};

export default About;
