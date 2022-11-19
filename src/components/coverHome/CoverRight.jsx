import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CoverQuote from "./CoverQuote";

const titleList = [
	<span key={uuidv4()}>
		The future belongs to <span className="theme">those who believe</span>in the
		beauty of their <span className="theme">dreams</span>
	</span>,
	<span key={uuidv4()}>
		It always seems <span className="theme">impossible</span> until it is{" "}
		<span className="theme">done</span>
	</span>,
	<span key={uuidv4()}>
		A world full of <span className="theme">love</span> is a dream full of{" "}
		<span className="theme">smile</span>
	</span>,
	<span key={uuidv4()}>
		Be the <span className="theme">change</span> everyone is waiting for
	</span>,
];

const CoverRight = () => {
	const [currentDisplay, setCurrentDisplay] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCurrentDisplay((prevState) =>
				prevState + 1 >= titleList.length ? 0 : prevState + 1
			);
		}, 4700);
		return () => clearInterval(id);
	}, []);

	const mappedTitle = titleList.map((title, key) => (
		<h2
			className={`cover-right__title ${
				currentDisplay === key ? "cover-right__title--shown" : ""
			} fs-450 white p-n n-s tr-1000`}
			key={key}
		>
			{title}
		</h2>
	));

	return (
		<div className="cover-right h-100 mg-l-20 mg-r-20 o-h f-c-en-be">
			<div className="cover-right__title-box w-100 f-c-ce-ce">
				<div className="cover-right__title-list w-100">{mappedTitle}</div>
			</div>
			<CoverQuote />
		</div>
	);
};

export default CoverRight;
