import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CoverHome from "components/CoverHome";
import { PageProvider } from "hooks/usePage";
import MobileApp from "components/MobileApp";
import About from "components/About";
import Divider from "components/Divider";

/*
	HomePage
*/

const HomePage = () => (
  <PageProvider defaultTab={0}>
    <Heading title="Andrian's Portfolio !" image="/images/covers/home.jpg">
      Welcome to my portfolio. Happy browsing !
    </Heading>
    <Page>
      <Fragment>
        <CoverHome />
        <About />
        <Divider />
        <MobileApp />
      </Fragment>
    </Page>
  </PageProvider>
);

export default HomePage;
