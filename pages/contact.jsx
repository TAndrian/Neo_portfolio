import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import SnackList from "components/SnackList";
import BobaList from "components/BobaList";

/*
	Restaurant's menu
*/

const Contact = () => (
  <PageProvider defaultTab={3}>
    <Heading title="Contact me" image="/imagescovers/carte.jpg">
      Let's talk!
    </Heading>
    <Page>
      <Fragment>
        <BobaList />
        <SnackList />
      </Fragment>
    </Page>
  </PageProvider>
);

export default Contact;
