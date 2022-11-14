import React from "react";
import AppLinks from "components/AppLinks";
import Social from "components/Social";

/*
	Mobile navigation menu
*/

const Menu = ({ opened, close }) => {
	return (
		<div
			className={`menu ${!opened ? "menu--closed" : ""} tr-200 w-100 f-r-en-st`}
			onClick={() => {
				if (typeof close === "function") close();
			}}
		>
			<div className="menu__overlay w-100 h-100 tr-200"></div>
			<div className="menu__window w-50 h-100 tr-200 f-c ">
				<AppLinks />
				<span className="spacer"></span>

				<Social />
			</div>
		</div>
	);
};

export default Menu;
