import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

/*
	Card that displays journey item content
*/

const AboutCard = ({
	image,
	establishment,
	location,
	about,
	position,
	duration,
	date,
	children,
}) => {
	return (
		<article className="about-card o-h br-10 tr-200 bg-white f-r-st-ce">
			<div className="about-card__representation w-270px h-100 o-h">
				<Image
					className="about-card__image"
					alt={establishment}
					width={270}
					height={270}
					src={image}
				/>
				<div className="about-card__establishment p-n n-s tr-200">
					<h5 className="pd-10 white fs-100">{establishment}</h5>
					<p className="pd-l-10 pd-r-10 white b fs-90">
						<Icon icon={["fas", "map-marked-alt"]} /> {location}
					</p>
					<p className="text--medium pd-10 fs-90 white">{about}</p>
					<p className="mg-b-10 mg-r-10 tx-r">
						<span className="pd-5 br-5 bg-theme white fs-90">
							<Icon icon={["fas", "calendar-alt"]} /> {date}
						</span>
					</p>
				</div>
			</div>
			<div className="about-card__about h-100 p-n n-s">
				<div className="f-r-be-ce">
					<h4 className="pd-10 fs-120">{position}</h4>
					<p className="about-card__years2 mg-r-10 tx-r">
						<Icon icon={["fas", "clock"]} /> {duration}
					</p>
				</div>
				<div className="about-card__separator mg-l-10 mg-r-10"></div>
				<p className="pd-10 fs-90 about-card__description">{children || ""}</p>
				<p className="about-card__years mg-r-10 tx-r">
					<Icon icon={["fas", "clock"]} /> {duration}
				</p>
			</div>
		</article>
	);
};

AboutCard.propTypes = {
	image: PropTypes.string.isRequired,
	establishment: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

export default AboutCard;
