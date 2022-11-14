import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import SnackList from "components/SnackList";
import BobaList from "components/BobaList";

/*
	Restaurant's menu
*/

const Experience = () => (
  <PageProvider defaultTab={1}>
    <Heading title="Professionnal experiences" image="/imagescovers/carte.jpg">
      Every experience I have achieved during my academic background.
    </Heading>
    <Page>
      <Fragment>
        <BobaList />
        <SnackList />
      </Fragment>
    </Page>
  </PageProvider>
);

export default Experience;
