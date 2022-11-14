import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Waves from "components/Waves";

const milkteaList = [
	{
		name: "Milktea lait au miel",
		image: "/images/milktea/milktea1.png",
	},
	{
		name: "Milktea melon",
		image: "/images/milktea/milktea2.png",
	},
	{
		name: "Milktea choco",
		image: "/images/milktea/milktea3.png",
	},
];

const CoverHome = () => {
	const [currentMilktea, setCurrentMilktea] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCurrentMilktea((prevState) =>
				prevState + 1 >= milkteaList.length ? 0 : prevState + 1
			);
		}, 2000);
		return () => clearInterval(id);
	}, []);

	const mappedMilktea = milkteaList.map((milktea, key) => (
		<img
			key={key}
			className={`milktea__item ${
				key === currentMilktea ? "milktea__item--shown" : ""
			} w-100 h-100 tr-200`}
			src={milktea.image}
			alt={milktea.name}
		/>
	));

	return (
		<div className="cover-home o-h bg-t">
			<div className="cover-home__bg w-100 h-100">
				<div className="cover-home__overlay w-100 h-100 f-c-st-st">
					<div className="top w-100">
						<div className="container h-100 o-h f-c-ce-ce">
							<h1 className="cover-home__title fs-400 white tx-c mg-b-40">
								Hi <span role="img">👋</span>, I am a <br />
								<span className="t">Full stack developper</span>
							</h1>
						</div>
					</div>
					<div className="bottom w-100 o-h">
						<Waves />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoverHome;
