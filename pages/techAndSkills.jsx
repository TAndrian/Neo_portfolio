import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import SnackList from "components/SnackList";
import BobaList from "components/BobaList";

/*
	Restaurant's menu
*/

const TechAndSkills = () => (
  <PageProvider defaultTab={2}>
    <Heading title="Tech & Skills" image="/imagescovers/carte.jpg">
      Every technology I can work with and my agilities with them.
    </Heading>
    <Page>
      <Fragment>
        <BobaList />
        <SnackList />
      </Fragment>
    </Page>
  </PageProvider>
);

export default TechAndSkills;
