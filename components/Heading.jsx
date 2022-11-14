import React from "react";
import Head from "next/head";

/*
	Head tag of each page
*/

const Heading = ({ title = "", image = "", children = "" }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="shortcut icon" href="/images/favicon.ico" />
    <meta name="theme-color" content="#ff104c" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <meta httpEquiv="language" content="fr" />
    <meta name="author" content="T.Andrian<t.andrian.rak@gmail.com>" />
    <meta name="description" content={children || ""} />
    <meta name="generator" content="NextJS" />
    <meta httpEquiv="language" content="fr" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={children || ""} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="Andrian's Portfolio" />
  </Head>
);

export default Heading;
