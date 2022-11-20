import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import GetInTouchTitle from "./GetInTouchTitle";

const contactList = [
	{
		content: "t.andrian.rak@gmail.com",
		icon: ["fas", "envelope"],
	},

	{
		content: "Rennes 35000, France",
		icon: ["fas", "map-marked-alt"],
	},
];

const mappedContacts = contactList.map((contact) => (
	<li className="mg-b-20" key={uuidv4()}>
		<Icon icon={contact.icon} /> {contact.content}
	</li>
));

const Contact = () => {
	return (
		<div className="contacts">
			<GetInTouchTitle title="Reach me" icon={["fas", "laptop"]} />
			<ul className="pd-20 pd-b-0">{mappedContacts}</ul>
		</div>
	);
};

export default Contact;
