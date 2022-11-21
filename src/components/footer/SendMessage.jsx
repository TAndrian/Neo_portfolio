import React, { Fragment, useState } from "react";
import GetInTouchTitle from "./GetInTouchTitle";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const message = `Hello 👋 !\n Thanks so much for reaching out! This auto-reply is just to let you know… I received your email and will get back to you as soon as possible.\n
        Best regards, 
        T.Andrian Rakotoarisoa.`;

const SendMessage = () => {
	const [isSent, setIsSent] = useState(false);

	return (
		<Fragment>
			<GetInTouchTitle title="Leave a message" icon={["fas", "envelope"]} />
			<form
				className="send-message f-c-ce-st"
				action="https://formsubmit.co/a7919fbb0efc9518af7767acdc9b9b9c"
				method="POST"
			>
				<input
					className="input br-5 pd-10 pd-l-20 pd-r-20"
					placeholder="What's your name? 😄"
					type="name"
					name="name"
					required
				/>
				<input
					className="input br-5 pd-10 pd-l-20 pd-r-20"
					placeholder="Enter your e-mail "
					type="email"
					name="email"
					required
				/>
				<input type="hidden" name="_subject" value="Someone is interested ?" />
				<input type="hidden" name="_cc" value="another@email.com" />
				<input type="hidden" name="_template" value="box" />
				<input type="hidden" name="_autoresponse" value={message} />

				<textarea
					className="input br-5 h-100px pd-10 pd-l-20 pd-r-20"
					name="message"
					placeholder="Write your message 📨"
					required
				></textarea>
				<button
					className="submit bg-theme pd-10 pd-l-20 pd-r-20 mg-t-20 br-5 p tr-200"
					type="submit"
					onClick={() => setIsSent(true)}
				>
					{isSent ? (
						<Icon className="fs-150 white" icon={["fas", "check-circle"]} />
					) : (
						"Send"
					)}
				</button>
			</form>
		</Fragment>
	);
};

export default SendMessage;
