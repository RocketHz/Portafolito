import React, { useContext } from "react";
import DribbleSvg from "./svgs/DribbleSvg";
import GithubSvg from "./svgs/GithubSvg";
import LinkedinSvg from "./svgs/LinkedinSvg";
import { LanguageContext } from "./subComponents/LanguageContext";

const Footer = () => {

  const { languageData } = useContext(LanguageContext);

  return (
    <div>
      <footer className=" text-oscure-bg-100 dark:text-light-bg-100 lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="/rocket-logo.jpg"
            alt=""
            className="absolute inset-0 max-h-full max-w-full object-cover my-3"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs uppercase tracking-wide ">
                  {" "}
                  {languageData.hourContact}{" "}
                </span>
              </p>
              <ul className="space-y-1 text-sm ">
                <li>{languageData.workingHours}</li>
                <li>{languageData.weekends}</li>
              </ul>
              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="http://www.linkedin.com/in/ronni-hernandez-a9b3301b9"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinSvg/>
                  </a>
                </li>
                <li>
                  <a
                    href="http://github.com/RocketHz"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>
                    <GithubSvg/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/RocketHz"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <DribbleSvg/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium ">{languageData.services}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <p
                      href="#"
                      
                    >
                      {" "}
                      {languageData.oneToOneCalls}{" "}
                    </p>
                  </li>
                  <li>
                    <p
                      href="#"
                      
                    >
                      {" "}
                      {languageData.webPages}{" "}
                    </p>
                  </li>
                  <li>
                    <p
                      href="#"
                      
                    >
                      {" "}
                      {languageData.webBusinessApplications}{" "}
                    </p>
                  </li>
                  <li>
                    <p
                      href="#"
                      
                    >
                      {" "}
                      {languageData.marketingPlatforms}
                      {" "}
                    </p>
                  </li>
                  <li>
                    <p
                      href="#"
                      
                    >
                      {" "}
                      {languageData.seoOptimization}{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium ">RocketHz</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#about"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.aboutMe}{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.projects}{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-8 text-xs text-light-text-100 dark:text-oscure-text-100 sm:mt-0">
                {languageData.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
