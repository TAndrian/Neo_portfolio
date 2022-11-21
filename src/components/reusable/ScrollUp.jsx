import React, { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
/**
 *
 * @Author T.Andrian RAKOTOARISOA
 */

const ScrollUp = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="scrollToTop__container">
			{showTopBtn && (
				<Icon
					icon={["fas", "arrow-alt-circle-up"]}
					className="scrollToTop__position white icon-style fs-180"
					onClick={goToTop}
				/>
			)}
		</div>
	);
};

export default ScrollUp;
