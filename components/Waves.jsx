import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Wave animation
*/

const Waves = () => (
	<div className="waves">
		<div className="box w-100 h-100 f-r-ce-ce">
			<ul className="social f-r-ce-ce">
				<li className="social__item">
					<a
						className="link br-r w-60px h-60px f-r-ce-ce tr-200"
						href="https://github.com/TAndrian"
						title="Visite my Github profile ! "
					>
						<Icon icon={["fab", "github"]} />
					</a>
				</li>
				<li className="social__item">
					<a
						className="link br-r w-60px h-60px f-r-ce-ce tr-200"
						href="https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/"
						title="Follow me on Linkedin !"
					>
						<Icon icon={["fab", "linkedin-in"]} />
					</a>
				</li>
				<li className="social__item hover--blue">
					<a
						className="link br-r w-60px h-60px f-r-ce-ce tr-200"
						href="mailto:t.andrian.rak@gmail.com?subject=Let's talk !"
						title="Send me an email !"
					>
						<Icon icon={["fas", "envelope"]} />
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Waves;
