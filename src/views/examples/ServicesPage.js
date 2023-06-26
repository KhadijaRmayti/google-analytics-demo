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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
  NavLink
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import TagManager from "react-gtm-module";

import "../../assets/css/services.css";

function ServicesPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-center-page");
    return function cleanup() {
      document.body.classList.remove("contact-center-page");
    };
  });

  const services = [
    {
      id: "1",
      name: "Request to Issue a Residency Family Visa - a Resident Sponsor Working in the Government Sector",
      description: "Through this service, the sponsor can create a sponsorship file to start requesting a family member visa.",
      tags: ["Federal Authority for Identity, Citizenship, Customs & Port Security", "Business", "Emirati", "Expat"],
      link: "/life-events/individual/Identity-Citizenship-Human-Resources/Residency-Entry-Permit/RequesttoOpenaSponsorshipFile",
      price: 38
    },
    {
      id: "2",
      name: "Request to Issue a Residency Family Visa - a Citizen Sponsor",
      description: "Through this service, the sponsor can create a sponsorship file to start requesting a family member visa.",
      tags: ["Federal Authority for Identity, Citizenship, Customs & Port Security", "Business", "Emirati", "Expat"],
      link: "/life-events/individual/Identity-Citizenship-Human-Resources/Residency-Entry-Permit/RequesttoIssueaFamilyVisaaCitizenSponsor",
      price: 28
    },
    {
      id: "3",
      name: "Request to Change File Status for Residency",
      description: "Through this service, the sponsor can create a sponsorship file to start requesting a family member visa.",
      tags: ["Federal Authority for Identity, Citizenship, Customs & Port Security", "Business", "Emirati", "Expat"],
      link: "/life-events/individual/Identity-Citizenship-Human-Resources/Residency-Entry-Permit/RequesttoChangeStatusofResidency",
      price: 30
    },
    {
      id: "4",
      name: "Request to Open a Sponsorship File",
      description: "Through this service, the sponsor can create a sponsorship file to start requesting a family member visa.",
      tags: ["Federal Authority for Identity, Citizenship, Customs & Port Security", "Business", "Emirati", "Expat"],
      link: "/life-events/individual/Identity-Citizenship-Human-Resources/Residency-Entry-Permit/RequesttoOpenaSponsorshipFile",
      price: 28
    },
    {
      id: "5",
      name: "Request to Issue of a Residency Family Visa - a Resident Sponsor, Investor or Partner",
      description: "Through this service, the sponsor can create a sponsorship file to start requesting a family member visa.",
      tags: ["Federal Authority for Identity, Citizenship, Customs & Port Security", "Business", "Emirati", "Expat"],
      link: "/life-events/individual/Identity-Citizenship-Human-Resources/Residency-Entry-Permit/RequesttoIssueaFamilyVisaaResidentSponsorInvestororPartner",
      price: 50
    }];

  TagManager.dataLayer({
    dataLayer: {
      event: 'Items List',
      name: "Identity, Citizenship, and Human Resources",
      items: services.map((service, index) => {
        return {
          index: index,
          item_id: service.id,
          item_name: service.name,
          item_category: "Identity, Citizenship, and Human Resources",
          item_list_name: "Identity, Citizenship, and Human Resources",
          price: service.price
        };
      })
    }
  });

  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <div className="ui-lib-sidebar-grid__content">
                  <div className="ui-lib-search-template__info">
                    <span className="ui-lib-search-template__info-results">
                      <p>Showing 1-6 of 6 results</p>
                    </span>
                  </div>
                  <div className="ui-lib-search-template__results ui-lib-search-template__results_grid">
                    <div className="ui-lib-category-list ui-lib-category-list-dummy">
                      {services.map(service => (
                        <div key={service.id} className="ui-lib-category-list-item">
                          <div className="ui-lib-category-list-item__content">
                            <NavLink tag={Link} className="ui-lib-link ui-lib-link_default" target="_self" aria-label={service.name} rel="noopener noreferrer" to={service.link}>
                              <h4 className="ui-lib-link__heading ui-lib-bold">{service.name}</h4>
                            </NavLink>
                            <div className="ui-lib-category-list-item__description">{service.description}</div>
                            <div className="ui-lib-category-list-item__tags">
                              {service.tags.map(tag => (
                                <div key={tag} tabIndex="0" role="button" className="ui-lib-tag ui-lib-tag_size-default ui-lib-tag_grey ui-lib-tag_hoverable ui-lib-tag_clickable">
                                  <NavLink to={"/searchresults?q=" + tag} tag={Link}><span className="ui-lib-tag__text">{tag}</span></NavLink>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default ServicesPage;
