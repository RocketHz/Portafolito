import React, { useContext } from "react";
import DribbleSvg from "./svgs/DribbleSvg";
import GithubSvg from "./svgs/GithubSvg";
import LinkedinSvg from "./svgs/LinkedinSvg";
import { LanguageContext } from "./subComponents/LanguageContext";

const Footer = () => {

  const { languageData } = useContext(LanguageContext);

  return (
    <div>
      <footer className="bg-gradient-to-r from-light-bg-100 via-oscure-bg-300/50 to-light-bg-100 dark:bg-gradient-to-r dark:from-oscure-bg-100 dark:via-light-text-200/70 dark:to-oscure-bg-100 text-oscure-bg-100 dark:text-light-bg-100 lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="/rocket-logo.jpg"
            alt=""
            className="absolute inset-0 max-h-full max-w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs uppercase tracking-wide ">
                  {" "}
                  {languageData.contactPhone}{" "}
                </span>
                <a
                  href="#"
                  className="block text-2xl font-medium  hover:opacity-75 sm:text-3xl"
                >
                  +58-412-874-7063
                </a>
              </p>
              <ul className="mt-8 space-y-1 text-sm ">
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
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.oneToOneCalls}{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.webPages}{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.webBusinessApplications}{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.marketingPlatforms}
                      {" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      {languageData.seoOptimization}{" "}
                    </a>
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
          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                &copy; {languageData.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
