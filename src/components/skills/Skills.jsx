import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../reusable/Section";
import SkillCard from "./SkillCard";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	BACK_END_LIST,
	DATABASE_LIST,
	FRONT_END_LIST,
	INFO_MESSAGE,
	MOBILE_INFO_MESSAGE,
	NEXT_TECH_LIST,
	OTHER_LIST,
	PROGRAMMING_LANGUAGE_LIST,
	PROJECT_MANAGEMENT,
	TEST_FRAMEWORK_LIST,
	TOOLS,
} from "../../helpers/const";
import { isMobile } from "react-device-detect";

/*
	Skills section
*/

const mappedFrontEndSkills = FRONT_END_LIST.map((frontendSkill) => (
	<SkillCard skill={frontendSkill} key={uuidv4()} />
));
const mappedBackEndSkills = BACK_END_LIST.map((backendSkill) => (
	<SkillCard skill={backendSkill} key={uuidv4()} />
));
const mappedDbSkills = DATABASE_LIST.map((database) => (
	<SkillCard skill={database} key={uuidv4()} />
));
const mappedOtherSkills = OTHER_LIST.map((otherTech) => (
	<SkillCard skill={otherTech} key={uuidv4()} />
));
const mappedNextToLearn = NEXT_TECH_LIST.map((nextToLearn) => (
	<SkillCard skill={nextToLearn} key={uuidv4()} />
));
const mappedProgramingLanguages = PROGRAMMING_LANGUAGE_LIST.map(
	(programmingLanguage) => (
		<SkillCard skill={programmingLanguage} key={uuidv4()} />
	)
);
const mappedTestFramework = TEST_FRAMEWORK_LIST.map((testFramework) => (
	<SkillCard skill={testFramework} key={uuidv4()} />
));
const mappedProjectManagement = PROJECT_MANAGEMENT.map(
	(mappedProjectManagement) => (
		<SkillCard skill={mappedProjectManagement} key={uuidv4()} />
	)
);

const mappedTools = TOOLS.map((tool) => (
	<SkillCard skill={tool} key={uuidv4()} />
));

const Skills = () => {
	const SKILLS_PRELUDE = (
		<>
			During my Licence degree&apos;s journey, I learned various programming
			language and algorithms for solving problems. But my passion about the web
			emerged when I started to build static web pages as a hobby. And then during
			my Master degree&apos;s journey, we discovered more framework and
			technologies.
		</>
	);
	return (
		<Fragment>
			<Section
				id="skills"
				title="My techs and skills"
				className="fs-250 mg-r-10"
				subtitle="I use wonderful tools !"
				icon={["fas", "laptop-code"]}
			>
				<p>{SKILLS_PRELUDE}</p>
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
				<h4 className="fs-190">Front end frameworks</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedFrontEndSkills}</div>
			</div>

			<div className="container pd-t-25 pd-b-15 f-r-st-ce">
				<Icon
					className="fs-240 mg-l-20 mg-r-10 blue"
					icon={["fas", "laptop-code"]}
				/>
				<h4 className="fs-190">Back end frameworks</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedBackEndSkills}</div>
			</div>

			<div className="container pd-t-25 pd-b-15 f-r-st-ce">
				<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fas", "code"]} />
				<h4 className="fs-190">Programming languages</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedProgramingLanguages}</div>
			</div>

			<div className="container pd-t-25 pd-b-15 f-r-st-ce">
				<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fas", "database"]} />
				<h4 className="fs-190">Database</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedDbSkills}</div>
			</div>

			<div className="container pd-t-25 pd-b-15 f-r-st-ce">
				<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fas", "flask"]} />
				<h4 className="fs-190">Testing frameworks</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedTestFramework}</div>
			</div>

			<div className="container pd-t-25 pd-b-15 f-r-st-ce">
				<Icon
					className="fs-240 mg-l-20 mg-r-10 blue"
					icon={["fas", "list-check"]}
				/>
				<h4 className="fs-190">Project management</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedProjectManagement}</div>
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

			<div className="container pd-t-25 pd-b-15 f-r-st-ce">
				<Icon className="fs-240 mg-l-20 mg-r-10 blue" icon={["fas", "toolbox"]} />
				<h4 className="fs-190">IDEs and tools</h4>
			</div>
			<div className="container">
				<div className="skills w-100">{mappedTools}</div>
			</div>

			<Section
				title="What's next?"
				className="fs-250 mg-r-10 orange"
				subtitle="I am interested to learn :"
				icon={["fas", "rocket"]}
			/>
			<div className="container">
				<div className="skills w-100">{mappedNextToLearn}</div>
			</div>
		</Fragment>
	);
};

export default Skills;
