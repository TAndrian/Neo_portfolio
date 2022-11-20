import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import AboutCard from "./AboutCard";
import Timeline from "../reusable/Timeline";

/*
	A row in the journey
*/

const AboutItem = ({ className, start, end, reversed, journey }) => {
	return (
		<section
			className={`about-item ${reversed ? "about-item--reversed" : ""} ${
				className ? className : ""
			} f-r-st-ce`}
		>
			<AboutCard
				image={journey.image}
				establishment={journey.establishment}
				location={journey.location}
				about={journey.about}
				position={journey.position}
				duration={journey.duration}
				date={journey.date}
			>
				{journey.description}
			</AboutCard>
			<Timeline start={start} end={end} icon={journey.icon} />
			<Image
				className="about-item__lottie w-200px h-200px n-s br-10 o-h"
				alt={journey.image}
				width={200}
				height={200}
				src={journey.lottie}
			/>
		</section>
	);
};

export default AboutItem;
