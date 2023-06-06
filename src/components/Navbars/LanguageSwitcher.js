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
  Button
} from "reactstrap";

function LanguageSwitcher() {
  const [language, setLanguage] = React.useState("En");

  const toggleLanguage = () => {
    setLanguage(language === "En" ? "Ar" : "En");
  };

  return (
    <Button
      className="btn-round ui-lib-language-switcher"
      color="danger"
      onClick={toggleLanguage}
    >
      {language === "En" ? "English" : "عربي"}
    </Button>
  );
}

export default LanguageSwitcher;
