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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Row, Container, NavLink } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <NavLink
                  to="/feedback"
                  tag={Link}
                  title="Submit Feedback"
                >
                  Submit Feedback
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ineligible"
                  tag={Link}
                  title="Request to Open a Sponsorship File"
                >
                  Request to Open a Sponsorship File
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-faqs"
                  tag={Link}
                  title="FAQs"
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  title="Contact Center"
                >
                  Contact Center
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
