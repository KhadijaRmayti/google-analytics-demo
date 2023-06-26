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
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import TagManager from "react-gtm-module";

import "../../assets/css/feedback.css";

function FeedbackPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("feedback-page");
    return function cleanup() {
      document.body.classList.remove("feedback-page");
    };
  });

  function handleSatisfactionClick(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const selectedSmiley = e.target.closest('svg');
    let selectedSmileyValue = selectedSmiley.id.replace('smiley_', '');
    let t = selectedSmileyValue++;

    TagManager.dataLayer({
      dataLayer: {
        satisfactionRate: t
      }
    });
  }

  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto">
                <h2 className="text-center">Rate Your Experience</h2>
                <div className="ui-lib-customer-satisfaction-feedback__question-container">
                  <div className="ui-lib-customer-satisfaction-feedback__question-container__question-title">Satisfaction</div>
                  <div className="ui-lib-customer-satisfaction-feedback__question-container__question-description">
                    How satisfied are you with the overall experience while availing the service?
                  </div>
                  <div className="ui-lib-customer-satisfaction-feedback__question-container__question-response">
                    <div className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container">
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_1" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="1">
                            <path d="M12,0 C18.617,0 24,5.38303 24,12 C24,18.617 18.617,24 12,24 C5.38303,24 0,18.617 0,12 C0,5.38303 5.38303,0 12,0 Z" id="Path" fill="#C00000"></path>
                            <path d="M7.17188,9.08083 C7.93558,9.08083 8.55456,9.69981 8.55456,10.4635 C8.55456,11.2271 7.93558,11.8462 7.17188,11.8462 C6.40818,11.8462 5.78906,11.2271 5.78906,10.4635 C5.78906,9.69981 6.40818,9.08083 7.17188,9.08083 Z M7.2503,5.45009 L10.4633,7.6741 C10.8145,7.91728 10.9021,8.39912 10.659,8.75045 C10.5088,8.96733 10.2675,9.08378 10.0223,9.08378 C9.87037,9.08378 9.71693,9.0392 9.58261,8.94609 L6.36959,6.72194 C6.0184,6.4789 5.93078,5.99706 6.17395,5.64573 C6.41713,5.2944 6.89911,5.20706 7.2503,5.45009 Z M16.8282,9.08083 C17.5919,9.08083 18.2108,9.69981 18.2108,10.4635 C18.2108,11.2271 17.5919,11.8462 16.8282,11.8462 C16.0645,11.8462 15.4455,11.2271 15.4455,10.4635 C15.4455,9.69981 16.0645,9.08083 16.8282,9.08083 Z M17.8259,5.64573 C18.0691,5.99706 17.9815,6.4789 17.6303,6.72194 L14.4174,8.94609 C14.2831,9.0392 14.1296,9.08378 13.9778,9.08378 C13.7325,9.08378 13.4913,8.96733 13.3411,8.75045 C13.0979,8.39912 13.1855,7.91728 13.5367,7.6741 L16.7496,5.45009 C17.1009,5.20706 17.5828,5.2944 17.8259,5.64573 Z M16.8476,18.1905 C16.5323,18.1905 16.2363,17.9964 16.1214,17.6832 C15.2477,15.3024 13.3474,14.4868 11.8646,14.5145 C10.026,14.5508 8.50236,15.7539 7.88845,17.6545 C7.75709,18.0611 7.32081,18.2839 6.91463,18.1528 C6.50802,18.0216 6.28496,17.5856 6.41632,17.179 C7.22686,14.6695 9.35354,13.0165 11.8342,12.9678 C14.4032,12.9141 16.6084,14.5197 17.5737,17.1503 C17.7209,17.5513 17.515,17.9957 17.1139,18.143 C17.026,18.1752 16.9361,18.1905 16.8476,18.1905 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_2" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="2">
                            <path d="M11.999977,0 C18.616977,0 23.999977,5.38303 23.999977,12 C23.999977,18.617 18.616977,24 11.999977,24 C5.383027,24 0,18.617 0,12 C0,5.38303 5.383027,0 11.999977,0 Z" id="Path" fill="#E52E2E"></path>
                            <path d="M8.554017,10.4624 C8.554017,11.226 7.935037,11.8451 7.171337,11.8451 C6.407777,11.8451 5.788667,11.226 5.788667,10.4624 C5.788667,9.6987 6.407777,9.07972 7.171337,9.07972 C7.935037,9.07972 8.554017,9.6987 8.554017,10.4624 Z M18.210277,10.4624 C18.210277,11.226 17.591477,11.8451 16.827577,11.8451 C16.064077,11.8451 15.444977,11.226 15.444977,10.4624 C15.444977,9.6987 16.064077,9.07972 16.827577,9.07972 C17.591477,9.07972 18.210277,9.6987 18.210277,10.4624 Z M18.531277,7.97062 C18.379377,7.97062 18.225977,7.92604 18.091577,7.83293 L14.878777,5.60892 C14.527577,5.36575 14.439877,4.8839 14.683077,4.53257 C14.926277,4.18124 15.408277,4.09362 15.759477,4.33693 L18.972377,6.56108 C19.323477,6.80426 19.411177,7.28597 19.167977,7.6373 C19.017777,7.85417 18.776577,7.97062 18.531277,7.97062 Z M5.467667,7.97062 C5.222387,7.97062 4.981177,7.85417 4.830977,7.6373 C4.587797,7.28597 4.675417,6.80426 5.026607,6.56108 L8.239487,4.33693 C8.590677,4.09376 9.072667,4.18124 9.315847,4.53257 C9.559017,4.8839 9.471397,5.36575 9.120207,5.60892 L5.907327,7.83293 C5.773007,7.92604 5.619567,7.97062 5.467667,7.97062 Z M16.847177,19.1761 C16.531877,19.1761 16.235777,18.982 16.120877,18.6688 C15.247177,16.288 13.346977,15.4724 11.864077,15.5001 C10.025477,15.5364 8.501877,16.7394 7.887967,18.6401 C7.756607,19.0467 7.320327,19.2695 6.914147,19.1384 C6.507537,19.0072 6.284477,18.5712 6.415837,18.1646 C7.226377,15.6551 9.353057,14.0021 11.833777,13.9534 C14.402777,13.8997 16.607877,15.5053 17.573177,18.1359 C17.720377,18.5369 17.514477,18.9813 17.113377,19.1286 C17.025477,19.1608 16.935577,19.1761 16.847177,19.1761 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_3" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="3">
                            <path d="M12,0 C18.617006,0 24,5.38303 24,12 C24,18.617 18.617006,24 12,24 C5.383026,24 0,18.617 0,12 C0,5.38303 5.383026,0 12,0 Z" id="Path" fill="#E85F5B"></path>
                            <path d="M8.554416,9.48815 C8.554416,10.2518 7.935436,10.8708 7.171736,10.8708 C6.408176,10.8708 5.789066,10.2518 5.789066,9.48815 C5.789066,8.72445 6.408176,8.10547 7.171736,8.10547 C7.935436,8.10547 8.554416,8.72445 8.554416,9.48815 Z M18.210706,9.48815 C18.210706,10.2518 17.591806,10.8708 16.828006,10.8708 C16.064406,10.8708 15.445306,10.2518 15.445306,9.48815 C15.445306,8.72445 16.064406,8.10547 16.828006,8.10547 C17.591806,8.10547 18.210706,8.72445 18.210706,9.48815 Z M11.952406,11.8402 C11.913006,11.8402 11.873606,11.8406 11.834106,11.8413 C9.353306,11.8901 7.226756,13.5431 6.416366,16.0526 C6.285006,16.4592 6.508066,16.8952 6.914666,17.0266 C7.321276,17.1576 7.757266,16.9346 7.888346,16.5281 C8.502406,14.6275 10.026006,13.4242 11.864506,13.3881 C13.355506,13.3635 15.247606,14.1761 16.121306,16.557 C16.268206,16.9578 16.712406,17.1641 17.113806,17.0166 C17.514906,16.8693 17.720806,16.425 17.573506,16.0239 C16.623106,13.4339 14.476106,11.8402 11.952406,11.8402 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_4" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="4">
                            <path d="M11.999959,0 C18.617059,0 23.999959,5.38298 23.999959,12 C23.999959,18.617 18.617059,24 11.999959,24 C5.382979,24 0,18.617 0,12 C0,5.38298 5.382979,0 11.999959,0 Z" id="Path" fill="#E76C72"></path>
                            <path d="M8.554419,9.48997 C8.554419,10.2537 7.935579,10.8726 7.171739,10.8726 C6.408179,10.8726 5.789059,10.2537 5.789059,9.48997 C5.789059,8.72626 6.408179,8.10742 7.171739,8.10742 C7.935579,8.10742 8.554419,8.72626 8.554419,9.48997 Z M18.210659,9.48997 C18.210659,10.2537 17.591759,10.8726 16.828059,10.8726 C16.064459,10.8726 15.445359,10.2537 15.445359,9.48997 C15.445359,8.72626 16.064459,8.10742 16.828059,8.10742 C17.591759,8.10742 18.210659,8.72626 18.210659,9.48997 Z M16.981259,16.4629 C16.745559,16.9095 16.192559,17.0804 15.746059,16.8447 C14.607259,16.2437 13.337359,15.9253 12.019559,15.9253 C10.715159,15.9253 9.457839,16.2371 8.328309,16.8262 C7.880649,17.0597 7.328469,16.8861 7.094969,16.4385 C6.861469,15.9908 7.035079,15.4386 7.482739,15.2051 C8.871829,14.4806 10.418959,14.0969 12.019559,14.0969 C13.636559,14.0969 15.199159,14.4887 16.599459,15.2277 C17.045959,15.4634 17.216859,16.0164 16.981259,16.4629 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_5" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="5">
                            <path d="M12.000312,0 C18.616712,0 24.000012,5.38317 24.000012,12 C24.000012,18.6168 18.616712,24 12.000312,24 C5.383312,24 0,18.6168 0,12 C0,5.38317 5.383312,0 12.000312,0 Z" id="Path" fill="#ADADAD"></path>
                            <path d="M8.554472,10.4628 C8.554472,11.2265 7.935482,11.8454 7.171772,11.8454 C6.408192,11.8454 5.789062,11.2265 5.789062,10.4628 C5.789062,9.69905 6.408192,9.08008 7.171772,9.08008 C7.935482,9.08008 8.554472,9.69905 8.554472,10.4628 Z M18.210912,10.4628 C18.210912,11.2265 17.592112,11.8454 16.828212,11.8454 C16.064612,11.8454 15.445512,11.2265 15.445512,10.4628 C15.445512,9.69905 16.064612,9.08008 16.828212,9.08008 C17.592112,9.08008 18.210912,9.69905 18.210912,10.4628 Z M16.828212,16.5407 L6.543092,16.5407 C6.115942,16.5407 5.769532,16.1944 5.769532,15.7671 C5.769532,15.3399 6.115942,14.9936 6.543092,14.9936 L16.828212,14.9936 C17.255312,14.9936 17.601812,15.3399 17.601812,15.7671 C17.601812,16.1944 17.255312,16.5407 16.828212,16.5407 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_6" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="6">
                            <path d="M12.000042,0 C18.617042,0 24.000042,5.38299 24.000042,12 C24.000042,18.617 18.617042,24 12.000042,24 C5.382982,24 0,18.617 0,12 C0,5.38299 5.382982,0 12.000042,0 Z" id="Path" fill="#B4D6B6"></path>
                            <path d="M8.554412,10.4626 C8.554412,11.2263 7.935582,11.8453 7.171742,11.8453 C6.408182,11.8453 5.789062,11.2263 5.789062,10.4626 C5.789062,9.69892 6.408182,9.08008 7.171742,9.08008 C7.935582,9.08008 8.554412,9.69892 8.554412,10.4626 Z M18.210642,10.4626 C18.210642,11.2263 17.591742,11.8453 16.828042,11.8453 C16.064442,11.8453 15.445342,11.2263 15.445342,10.4626 C15.445342,9.69892 16.064442,9.08008 16.828042,9.08008 C17.591742,9.08008 18.210642,9.69892 18.210642,10.4626 Z M7.097032,15.557 C7.332702,15.1105 7.885722,14.9396 8.332232,15.1752 C9.471042,15.7763 10.740942,16.0947 12.058742,16.0947 C13.363142,16.0947 14.620442,15.7829 15.749942,15.1937 C16.197642,14.9602 16.749842,15.1338 16.983342,15.5815 C17.216842,16.0291 17.043142,16.5813 16.595542,16.8148 C15.206442,17.5394 13.659242,17.9231 12.058742,17.9231 C10.441642,17.9231 8.879072,17.5313 7.478812,16.7922 C7.032292,16.5565 6.861362,16.0035 7.097032,15.557 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_7" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="7">
                            <path d="M12,0 C18.616695,0 24,5.3833 24,12 C24,18.6167 18.616695,24 12,24 C5.383305,24 0,18.6167 0,12 C0,5.3833 5.383305,0 12,0 Z" id="Path" fill="#90BF90"></path>
                            <path d="M8.554415,8.96275 C8.554415,9.72645 7.935435,10.3454 7.171735,10.3454 C6.408175,10.3454 5.789065,9.72645 5.789065,8.96275 C5.789065,8.19905 6.408175,7.58008 7.171735,7.58008 C7.935435,7.58008 8.554415,8.19905 8.554415,8.96275 Z M18.210695,8.96275 C18.210695,9.72645 17.591895,10.3454 16.827995,10.3454 C16.064495,10.3454 15.445295,9.72645 15.445295,8.96275 C15.445295,8.19905 16.064495,7.58008 16.827995,7.58008 C17.591895,7.58008 18.210695,8.19905 18.210695,8.96275 Z M11.952395,18.0389 C11.912995,18.0389 11.873695,18.0385 11.834095,18.0378 C9.353305,17.989 7.226755,16.336 6.416365,13.8264 C6.285005,13.4198 6.508065,12.9838 6.914665,12.8525 C7.321275,12.7214 7.757265,12.9445 7.888355,13.3509 C8.502405,15.2516 10.025995,16.4548 11.864495,16.4909 C13.355495,16.5156 15.247595,15.7029 16.121295,13.3221 C16.268195,12.9212 16.712395,12.7149 17.113795,12.8625 C17.514895,13.0097 17.720795,13.454 17.573595,13.8551 C16.623095,16.4451 14.476095,18.0389 11.952395,18.0389 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_8" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.9">
                          <g id="Group">
                            <path d="M12.000025,0 C18.617025,0 24.000025,5.38299 24.000025,12 C24.000025,18.617 18.617025,24 12.000025,24 C5.382985,24 0,18.617 0,12 C0,5.38299 5.382985,0 12.000025,0 Z" id="Path" fill="#81AA81"></path>
                            <path d="M6.967465,16.6833 L6.354685,16.0827 C6.105565,15.8386 6.101535,15.4387 6.345685,15.1896 C6.464475,15.0684 6.627045,15.0001 6.796755,15.0001 L17.204825,15.0001 C17.553625,15.0001 17.836425,15.2828 17.836425,15.6316 C17.836425,15.8012 17.768225,15.9636 17.647225,16.0824 L17.034925,16.6833 C15.677025,18.0163 13.889225,18.7501 12.001225,18.7501 C10.114525,18.7501 8.327195,18.0163 6.967465,16.6833 Z M8.554565,9.71275 C8.554565,10.4765 7.935585,11.0954 7.172025,11.0954 C6.408325,11.0954 5.789065,10.4765 5.789065,9.71275 C5.789065,8.94905 6.408325,8.33008 7.172025,8.33008 C7.935585,8.33008 8.554565,8.94905 8.554565,9.71275 Z M18.210725,9.71275 C18.210725,10.4765 17.591825,11.0954 16.828325,11.0954 C16.064725,11.0954 15.445325,10.4765 15.445325,9.71275 C15.445325,8.94905 16.064725,8.33008 16.828325,8.33008 C17.591825,8.33008 18.210725,8.94905 18.210725,9.71275 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_9" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="8">
                            <path d="M11.999978,0 C18.616978,0 23.999978,5.38299 23.999978,12 C23.999978,18.617 18.616978,24 11.999978,24 C5.382988,24 0,18.617 0,12 C0,5.38299 5.382988,0 11.999978,0 Z" id="Path" fill="#698769"></path>
                            <path d="M8.765498,9.63268 C8.765498,10.3964 8.146518,11.0154 7.382958,11.0154 C6.619258,11.0154 5.999998,10.3964 5.999998,9.63268 C5.999998,8.86898 6.619258,8.25 7.382958,8.25 C8.146518,8.25 8.765498,8.86898 8.765498,9.63268 Z M18.421678,9.63268 C18.421678,10.3964 17.802778,11.0154 17.039278,11.0154 C16.275678,11.0154 15.656278,10.3964 15.656278,9.63268 C15.656278,8.86898 16.275678,8.25 17.039278,8.25 C17.802778,8.25 18.421678,8.86898 18.421678,9.63268 Z M6.787468,15.2612 C6.711378,15.0259 6.752588,14.7684 6.898158,14.5683 C7.043588,14.3683 7.276208,14.25 7.523468,14.25 L17.218678,14.25 C17.471378,14.25 17.708078,14.3735 17.852978,14.5808 C17.997578,14.788 18.031878,15.0528 17.944778,15.2901 C16.997878,17.8706 14.841478,19.4737 12.317478,19.4737 C9.784178,19.4734 7.613758,17.8198 6.787468,15.2612 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                      <svg onClick={handleSatisfactionClick} tabIndex="0" version="1.1" xmlns="http://www.w3.org/2000/svg" id="smiley_10" data-key="" className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__circle-icon ui-lib-icon" width="24" height="24" viewBox="0 0 24 24">
                        <title></title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="10">
                            <path d="M11.999955,0 C18.617055,0 23.999955,5.38299 23.999955,12 C23.999955,18.617 18.617055,24 11.999955,24 C5.382985,24 0,18.617 0,12 C0,5.38299 5.382985,0 11.999955,0 Z" id="Path" fill="#4D6D51"></path>
                            <path d="M8.554565,8.96275 C8.554565,9.72645 7.935585,10.3454 7.172025,10.3454 C6.408325,10.3454 5.789065,9.72645 5.789065,8.96275 C5.789065,8.19905 6.408325,7.58008 7.172025,7.58008 C7.935585,7.58008 8.554565,8.19905 8.554565,8.96275 Z M18.210755,8.96275 C18.210755,9.72645 17.591855,10.3454 16.828355,10.3454 C16.064755,10.3454 15.445355,9.72645 15.445355,8.96275 C15.445355,8.19905 16.064755,7.58008 16.828355,7.58008 C17.591855,7.58008 18.210755,8.19905 18.210755,8.96275 Z M12.314355,19.5801 L12.313355,19.5801 C9.441125,19.5798 6.979745,17.6805 6.042635,14.7416 C5.956345,14.4713 6.003075,14.1754 6.168165,13.9457 C6.333105,13.7159 6.596765,13.5801 6.877345,13.5801 L17.872855,13.5801 C18.159555,13.5801 18.427955,13.7219 18.592155,13.9599 C18.756255,14.198 18.795155,14.5022 18.696455,14.7747 C17.622355,17.7388 15.176755,19.5801 12.314355,19.5801 Z" id="Shape" fill="#FFFFFF"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__content">
                      <div className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__content-start">Very Dissatisfied</div>
                      <div className="ui-lib-customer-satisfaction-feedback__question-container__question-response__ellipse-container__content-end">Very Satisfied</div>
                    </div>
                  </div>
                </div>
                <Button className="ui-lib-button qa-button ui-lib-button_primary ui-lib-button_medium ui-lib-button_icon-end">Confirm</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default FeedbackPage;
