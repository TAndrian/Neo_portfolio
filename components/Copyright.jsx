import React from "react";
import { WEBSITE_NAME } from "helpers/const";

const Copyright = () => (
  <div className="copyright f-r-ce-ce pd-t-10 pd-b-10 bg-t n-s">
    <p className="right tx-l pd-l-10 white b">
      All right reserved {WEBSITE_NAME}, Copyright © 2021 -{" "}
      {new Date().getFullYear()}
    </p>
  </div>
);

export default Copyright;
