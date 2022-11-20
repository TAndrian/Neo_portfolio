import React from "react";

const Copyright = () => {
	return (
		<footer className="copyright f-r-ce-ce pd-t-10 pd-b-10 bg-theme2 n-s">
			<p className="right tx-l pd-l-10 white b">
				Copyright © {new Date().getFullYear()}
			</p>
		</footer>
	);
};

export default Copyright;
