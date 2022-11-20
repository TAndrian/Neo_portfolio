import React from "react";
import SendMessage from "./SendMessage";
import Contact from "./Contact";

const GetInTouch = () => (
	<section id="get-in-touch" className="get-in-touch">
		<div className="get-in-touch__box bg-white w-100 pd-b-10">
			<div className="container">
				<div className="list f-r-be-ce w-100">
					<div className="box msg">
						<SendMessage />
					</div>
					<div className="box reach">
						<Contact />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default GetInTouch;
