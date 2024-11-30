import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import img from "../../assets/pfpic.jpg";

const ProfileCard = ({ dark }) => (
	<article
		className={`card-profile ${
			dark ? "card-profile--dark" : ""
		} br-10 mg-l-20 o-h f-c`}
	>
		<Image
			className="card-profile__figure o-h br-5 f-r-ce-ce n-s"
			style={{
				color: "white",
				background: "rgb(20, 20, 20)",
				margin: "auto",
				marginTop: "20px",
				display: "flex",
				justifyContent: "center",
			}}
			alt="T.Andrianina RAKOTOARISOA"
			src={img}
		/>
		<h2 className="card-profile__name white pd-20 pd-t-40 pd-b-10">
			T.Andrian&apos; RAKOTOARISOA
		</h2>
		<div className="card-profile__separator mg-a"></div>
		<p className="card-profile__description white tx-j pd-20 pd-b-0 pd-t-10 p-n n-s">
			As a full-stack developer with 2 years of professional experience in designing,
			developing, testing and deploying software solutions, I excel in teamwork while adhering to deadlines and quality standards.
		</p>
		<span className="spacer"></span>
		<div className="f-r-be-ce pd-b-5">
			<p className="card-profile__company-label white pd-10 pd-l-20 pd-r-20 n-s">
				<Icon icon={["fas", "laptop"]} /> Status:
			</p>
			<a
				className="card-profile__link pd-5 br-5 mg-r-20 bg-theme tr-200 f-r-ce-ce fs-80"
				title="Looking for career oportunities"
				href="#0"
			>
				Junior Developer.
			</a>
		</div>
	</article>
);

export default ProfileCard;
