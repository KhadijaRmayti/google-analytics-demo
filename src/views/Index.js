/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionServices from "./index-sections/SectionServices";
import TagManager from "react-gtm-module";

function Index() {
  React.useEffect(() => {
    TagManager.dataLayer({
      dataLayer: []
    });
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionServices />
        <SectionLogin />
        <SectionExamples />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
