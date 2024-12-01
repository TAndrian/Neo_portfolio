import React, { Fragment, Suspense } from "react";
import Cover from "./coverHome/Cover";
import NavbarWrapper from "./navigation/NavbarWrapper";
import ScrollUp from "./reusable/ScrollUp";

const AboutComponent = React.lazy(() => import("./about/About"));
const SkillsComponent = React.lazy(() => import("./skills/Skills"));
const FooterComponent = React.lazy(() => import("./footer/GetInTouch"));
const CopyrightComponent = React.lazy(() => import("./footer/Copyright"));

function getFallback() {
	return <div>Loading...</div>;
}

const Home = () => (
	<Fragment>
		<ScrollUp />
		<NavbarWrapper />
		<Cover />
		<div className="container">
			<Suspense fallback={getFallback()}>
				<AboutComponent />
			</Suspense>
		</div>
		<Suspense fallback={getFallback()}>
			<SkillsComponent />
		</Suspense>
		<Suspense fallback={getFallback()}>
			<FooterComponent />
		</Suspense>
		<Suspense fallback={getFallback()}>
			<CopyrightComponent />
		</Suspense>
	</Fragment>
);

export default Home;
