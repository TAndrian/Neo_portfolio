import React, { Fragment } from "react";
import Cover from "./coverHome/Cover";
import NavbarWrapper from "./navigation/NavbarWrapper";
import Section from "./reusable/Section";

const AboutComponent = React.lazy(() => import("./about/About"));
const SkillsComponent = React.lazy(() => import("./skills/Skills"));
const FooterComponent = React.lazy(() => import("./footer/GetInTouch"));
const CopyrightComponent = React.lazy(() => import("./footer/Copyright"));

const Home = () => (
	<Fragment>
		<NavbarWrapper />
		<Cover />
		<Section
			id="about"
			title="About me"
			className="fs-250 mg-r-10"
			subtitle="Who am I?"
			icon={["fas", "user-graduate"]}
		>
			<Fragment>
				I am a young graduate from the University of Rennes 1 based in FRANCE as
				software engineer and I am currently looking for new career opportunities. I
				am a full stack developer and interested in M.E.R.N stack projects but I am
				also open to learn new technologies or programming language. I enjoy
				designing apps for web. I like them to be fast and beautiful with scallable
				code. Do not hesitate to talk with me, I speak English and French fluently
				apart of my native language.
			</Fragment>
		</Section>

		<div className="container">
			<AboutComponent />
		</div>
		<SkillsComponent />
		<FooterComponent />
		<CopyrightComponent />
	</Fragment>
);

export default Home;
