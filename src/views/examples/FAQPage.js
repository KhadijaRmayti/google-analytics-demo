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
import {
  Container,
  Row
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import "./../../assets/css/faq.css";

import TagManager from "react-gtm-module";

function FAQPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    TagManager.dataLayer({
      dataLayer: []
    });
    document.body.classList.add("faqs-page");
    return function cleanup() {
      document.body.classList.remove("faqs-page");
    };
  });

  function toggleFAQItem(event) {
    var isExpanded = (event.target || event.srcElemet).closest('.ui-lib-accordion-item').dataset.expanded;
    console.log(isExpanded);
    if (isExpanded == true) {
      TagManager.dataLayer({
        dataLayer: {
          event: 'FAQ Item Expanded',
          faqTitle: (event.target || event.srcElemet).closest('button.ui-lib-accordion-item__head').innerText
        }
      });
    }
  }

  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <div className="ui-lib-sidebar-grid__content">
                <h2 className="ui-lib-faq__title">Featured FAQs</h2>
                <div className="ui-lib-faq__accordion">
                  <div className="ui-lib-accordion" data-no-borders="false">
                    <div className="ui-lib-accordion-item" data-ui-type="default" data-expanded="true" data-no-side-paddings="false" data-no-bottom-padding="false">
                      <button onClick={toggleFAQItem} className="ui-lib-accordion-item__head" type="button">
                        <div className="ui-lib-accordion-item__head-title" data-bold="false" data-caption="false" data-wide="true" data-indicator-large="false">
                          <p>Can I submit complaints through TAMM?</p>
                        </div>
                        <svg tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" data-large="false" data-key="" className="ui-lib-accordion-item__head-indicator ui-lib-icon" width="24" height="24" viewBox="0 0 24 24"><title></title><path d="M1.5,13.5h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z"></path></svg>
                      </button>
                      <div className="ui-lib-accordion-item__body" data-expanded="true">
                        <div className="ui-lib-accordion-item__body-content" data-focused="false">
                          <div>
                            <div className="ui-lib-margin-t_md ui-lib-margin-b_md"></div>
                            <p>Users can communicate with the Government of Abu Dhabi, submit complaints, feedback and receive responses.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ui-lib-accordion-item" data-ui-type="default" data-expanded="false" data-no-side-paddings="false" data-no-bottom-padding="false">
                      <button onClick={toggleFAQItem} className="ui-lib-accordion-item__head" type="button">
                        <div className="ui-lib-accordion-item__head-title" data-bold="false" data-caption="false" data-wide="true" data-indicator-large="false">
                          <p>Are there any centres for TAMM or do I have to access services online only?</p>
                        </div>
                        <svg tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" data-large="false" data-key="" className="ui-lib-accordion-item__head-indicator ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                          <title></title>
                          <path d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"></path>
                        </svg>
                      </button>
                      <div className="ui-lib-accordion-item__body" data-expanded="false">
                        <div className="ui-lib-accordion-item__body-content" data-focused="false">
                          <div>
                            <div className="ui-lib-margin-t_md ui-lib-margin-b_md"></div>
                            <p>You will be able to access services on TAMM the website, smart application or visiting TAMM centres and branches throughout the Emirate of Abu Dhabi.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default FAQPage;
