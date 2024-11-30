import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useMenu } from "../../hooks";

const title = "T.Andrianina";
const splitTittle = title.split("");

const Navbar = () => {
	const { toggle, links } = useMenu();
	const [currentChar, setCurrentChar] = useState(-1);

	useEffect(() => {
		const startDelay = 1000;
		const delay = 100;
		setTimeout(
			() => {
				if (currentChar < splitTittle.length)
					setTimeout(() => {
						setCurrentChar((prevState) => prevState + 1);
					}, delay);
			},
			currentChar === -1 ? startDelay : 0
		);
	}, [currentChar]);

	const mappedChars = splitTittle.map((c, key) => (
		<span
			className={`char white tr-200 ${currentChar >= key && "char--visible"} ${
				key < 4 && "theme"
			}`}
			key={key}
		>
			{c}
		</span>
	));

	const mappedLinks = links.map((link) => (
		<li key={uuidv4()}>
			<a
				className="link fs-110 b pd-10 pd-l-20 pd-r-20 br-5 tr-200"
				href={link.anchor}
				title={link.title}
			>
				<Icon icon={link.icon} /> {link.content}
			</a>
		</li>
	));

	return (
		<nav className="navbar w-100 bg-theme2 f-r-ce-ce">
			<div className="container">
				<div className="w-100 f-r-be-ce">
					<div className="f-r-st-ce">
						<div className="f-r-st-st">
							<div className="title">
								<h1 className="fs-250 n-s p-n">{mappedChars}</h1>
								<h2 className="title-shadow fs-250 n-s p-n">{title}</h2>
							</div>
						</div>
					</div>
					<ul className="navbar__links f-r-st-ce">{mappedLinks}</ul>
					<div
						className="navbar__trigger w-50px h-50px br-50 white p n-s tr-200"
						title="Open menu."
						onClick={toggle}
					>
						<Icon icon={["fas", "bars"]} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
