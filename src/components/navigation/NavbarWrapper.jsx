import React from "react";
import Navbar from "./Navbar";
import { MenuProvider } from "../../context";
import Menu from "./Menu";

const NavbarWrapper = () => (
	<MenuProvider>
		<Navbar />
		<Menu />
	</MenuProvider>
);
export default NavbarWrapper;
