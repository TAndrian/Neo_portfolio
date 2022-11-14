import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import AppLinks from "components/AppLinks";
import { WEBSITE_NAME } from "helpers/const";
import Image from "next/image";

/*
	Navigation bar
*/

const Navbar = ({ toggle }) => (
	<nav className="navbar w-100 bg-t ">
		<div className="container f-r-ce-ce h-100 ">
			<div className="emblem outer">
				<div className="emblem inner"></div>
			</div>
			<div className="">
				<h1 className="navbar__title fs-150 white">{WEBSITE_NAME}</h1>
			</div>
			<div className="emblem outer">
				<div className="emblem inner"></div>
			</div>
			<span className="spacer"></span>

			<AppLinks />
			<div
				className="navbar__trigger o-h tr-200 br-r  fs-150 p"
				title="Menu"
				onClick={() => {
					if (typeof toggle === "function") toggle();
				}}
			>
				<Icon icon={["fas", "bars"]} />
			</div>
		</div>
	</nav>
);

export default Navbar;
