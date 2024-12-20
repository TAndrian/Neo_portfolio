import React, { createContext, useContext, useMemo, useState } from "react";

/**
 * Hook and context for menu
 */

//Setup context
const MenuContext = createContext({});

//Setup provider wrapper
const MenuProvider = ({ children }) => {
	const [opened, setOpened] = useState(false);
	const [links, setLinks] = useState([
		{
			icon: ["fas", "user-graduate"],
			content: "About me",
			anchor: "#about",
			title: "About me and my journey!",
		},
		{
			icon: ["fas", "laptop-code"],
			content: "Techs & skills",
			anchor: "#skills",
			title: "What I can do?",
		},
		{
			icon: ["fas", "folder-open"],
			content: "Projects",
			anchor: "#0",
			title: "My personal achievements!",
		},
		{
			icon: ["fas", "envelope"],
			content: "Contacts",
			anchor: "#get-in-touch",
			title: "How to reach me.",
		},
	]);

	// Toggles filter on of off
	const toggle = () => setOpened((prevState) => !prevState);
	const close = () => setOpened(false);

	// Memoize values to prevent futile re-renders
	const memoizedValues = useMemo(
		() => ({
			opened,
			links,
			toggle,
			close,
		}),
		[opened, links]
	);

	return (
		<MenuContext.Provider value={memoizedValues}>{children}</MenuContext.Provider>
	);
};

const useMenu = () => useContext(MenuContext);

export { useMenu, MenuProvider };
