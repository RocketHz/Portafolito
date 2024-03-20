import React, { useContext } from "react";
import ContactMeSvg from "./svgs/ContactMeSvg";
import { Switch } from "./Switch";
import SwitchLanguage from "./subComponents/SwitchLanguage";
import { LanguageContext } from "./subComponents/LanguageContext";

const Header = () => {

  const { languageData } = useContext(LanguageContext);

  return (
    <header className="shadow-md shadow-oscure-primary-100">
      <nav className="bg-gradient-to-r from-light-bg-100 via-oscure-bg-300/50 to-light-bg-100 dark:bg-gradient-to-r dark:from-oscure-bg-100 dark:via-light-text-200/70 dark:to-oscure-bg-100">
        <div className="container flex flex-wrap items-center justify-center p-6 mx-auto text-light-text-100 capitalize dark:text-oscure-text-100">
          <a
            href="/"
            className="border-b-2 mb-4 border-light-accent-200  hover:border-light-accent-100 dark:border-oscure-accent-100 hover:dark:border-oscure-accent-200 mx-1.5 sm:mx-6"
          >
            {languageData.rocketHz}
          </a>
          <a
            href="#projects"
            className="border-b-2 mb-4 border-light-accent-200  hover:border-light-accent-100 dark:border-oscure-accent-100 hover:dark:border-oscure-accent-200 mx-1.5 sm:mx-6"
          >
            {languageData.projects}
          </a>
          <a
            href="#about"
            className="border-b-2 mb-4 border-light-accent-200  hover:border-light-accent-100 dark:border-oscure-accent-100 hover:dark:border-oscure-accent-200 mx-1.5 sm:mx-6"
          >
            {languageData.aboutMe}
          </a>
          <a
            href="#contact"
            className="border-b-2 mb-4 border-light-accent-200  hover:border-light-accent-100 dark:border-oscure-accent-100 hover:dark:border-oscure-accent-200 mx-1.5 sm:mx-6 w-28 flex items-center"
          >
            {languageData.contactMe}
            <ContactMeSvg/>
          </a>
            <div>
              <Switch/>
              
              <SwitchLanguage/>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
