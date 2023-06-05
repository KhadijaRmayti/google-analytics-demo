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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others
import TagManager from "react-gtm-module";

//identify if you are on development or production
//when you build your app process.env.NODE_ENV is set to 'production' 
const env = process.env.NODE_ENV;
const tagManagerArgs = {
  gtmId: "GTM-N96MSVC",
  //the below changes GTM values based on whether dev or production
  auth: env === "development"
    ? "0owGNih82i9cLKizQCwMqA" //dev ga_auth
    : "wUM4FADN9fNW6CZ_vAFjIQ", //live ga_auth
  preview: env === "development"
    ? "env-7" //dev ga_env
    : "env-1" //live ga_env
};
TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
