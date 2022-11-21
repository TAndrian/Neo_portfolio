import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../reusable/Section";
import SkillCard from "./SkillCard";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	FRONT_END_LIST,
	BACK_END_LIST,
	DATABASE_LIST,
	OTHER_LIST,
	NEXT_TECH_LIST,
	MOBILE_INFO_MESSAGE,
	INFO_MESSAGE,
} from "../../helpers/const";
import { isMobile } from "react-device-detect";

/*
	Skills section
*/

const mappedFrontEndSkills = FRONT_END_LIST.map((skill) => (
	<SkillCard skill={skill} key={uuidv4()} />
));
const mappedBackEndSkills = BACK_END_LIST.map((skill) => (
	<SkillCard skill={skill} key={uuidv4()} />
));

const mappedDbSkills = DATABASE_LIST.map((skill) => (
	<SkillCard skill={skill} key={uuidv4()} />
));
const mappedOtherSkills = OTHER_LIST.map((skill) => (
	<SkillCard skill={skill} key={uuidv4()} />
));
const mappednextSkills = NEXT_TECH_LIST.map((skill) => (
	<SkillCard skill={skill} key={uuidv4()} />
));

const Skills = () => (
	<Fragment>
		<Section
			id="skills"
			title="My techs and Skills"
			className="fs-250 mg-r-10"
			subtitle="I use wonderful tools !"
			icon={["fas", "laptop-code"]}
		>
			<Fragment>
				During my Licence degree&apos;s journey, I learned various programming
				language and algorithms for solving problems. But my passion about the web
				emerged when I started to build static web page as a hobbie. And then during
				my Master degree&apos;s journey, we discovered more framework and
				technologies about the web. Some of them could appear simple, but the logic
				behind the stack it uses is the major part of it is hidden from the public
				eye.
			</Fragment>
		</Section>
		<span className="container pd-b-25">
			<Icon className="fs-140 blue mg-r-10" icon={["fas", "info-circle"]} />
			{isMobile ? (
				<p className="tx-ce fs-120">{MOBILE_INFO_MESSAGE}</p>
			) : (
				<p className="tx-ce fs-120">{INFO_MESSAGE}</p>
			)}
		</span>
		<div className="container pd-b-15 f-r-st-ce">
			<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fab", "uikit"]} />
			<h4 className="fs-190">Front end</h4>
		</div>
		<div className="container">
			<div className="skills w-100">{mappedFrontEndSkills}</div>
		</div>
		<div className="container pd-t-25 pd-b-15 f-r-st-ce">
			<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fas", "code"]} />
			<h4 className="fs-190">Back end</h4>
		</div>
		<div className="container">
			<div className="skills w-100">{mappedBackEndSkills}</div>
		</div>
		<div className="container pd-t-25 pd-b-15 f-r-st-ce">
			<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fas", "database"]} />
			<h4 className="fs-190">Database</h4>
		</div>
		<div className="container">
			<div className="skills w-100">{mappedDbSkills}</div>
		</div>
		<div className="container pd-t-25 pd-b-15 f-r-st-ce">
			<Icon
				className="fs-240 mg-l-20 mg-r-10 blue"
				icon={["fas", "layer-group"]}
			/>
			<h4 className="fs-190">Others</h4>
		</div>
		<div className="container">
			<div className="skills w-100">{mappedOtherSkills}</div>
		</div>
		<Section
			title="What's next?"
			className="fs-250 mg-r-10 orange"
			subtitle="I am interested to learn :"
			icon={["fas", "rocket"]}
		/>

		<div className="container">
			<div className="skills w-100">{mappednextSkills}</div>
		</div>
	</Fragment>
);

export default Skills;
