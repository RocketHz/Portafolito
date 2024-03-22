import React, { useContext } from "react";
import projects from "../utils/projects.json";
import GithubSvg from "./svgs/GithubSvg";
import ExternalSvg from "./svgs/ExternalSvg";
import ArrowLeftSvg from "./svgs/ArrowLeftSvg";
import ArrowRigthSvg from "./svgs/ArrowRigthSvg";
import { LanguageContext, useLanguage } from "./subComponents/LanguageContext";
import ReactSvg from "./svgs/ReactSvg";
import HtmlSvg from "./svgs/HtmlSvg";
import CssSvg from "./svgs/CssSvg";
import JavaScriptSvg from "./svgs/JavaScriptSvg";

const Features = () => {
  const { language } = useLanguage();

  const { languageData } = useContext(LanguageContext);

  const [currentProject, setCurrentProject] = React.useState(0);

  const redirectToNewTab = (url) => {
    window.open(url, "_blank");
  };

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const svgs = {
    React: ReactSvg,
    Html: HtmlSvg,
    Css: CssSvg,
    JavaScript: JavaScriptSvg
  };

  return (
    <section
      id="projects"
      className="text-light-text-100 dark:text-oscure-text-100 p-4 sm:p-6 md:p-8 flex flex-col justify-evenly items-center flex-wrap shadow-md shadow-oscure-primary-100"
    >
      <div className="flex flex-col flex-wrap justify-center items-center p-4 sm:p-6 md:p-8">
        <h2 className="text-light-accent-200 dark:text-oscure-primary-100">
          {languageData.projects}
        </h2>
        <p>{languageData.projectsDescription}</p>
      </div>
      <div className="">
        {projects.map((project) => (
          <div
            className="bg-gradient-to-b from-light-bg-100 to-light-bg-300 dark:bg-gradient-to-b dark:from-oscure-bg-100  dark:to-oscure-bg-300 rounded-xl transition-all duration-300"
            key={project.id}
            style={{
              display:
                project.id === projects[currentProject].id ? "flex" : "none",
            }}
          >
            <div className="grid grid-cols-3 grid-rows-7 justify-items-center rounded-lg transition-all duration-200 p-6 gap-5">
              <img
                src={project.image}
                alt="Feature 01"
                className="col-start-2 extend"
              />
              <h4 className="text-xl sm:text-2xl col-span-3 row-start-2 text-light-accent-100">
                {project.title}
              </h4>
              <p className="text-sm sm:text-base text-center col-span-3 row-start-3 w-6/12">
                {language === "es" ? project.description : project.descriptionT}
              </p>
              <div className="col-start-2 row-start-4 grid gap-1">
                <button
                  onClick={() => redirectToNewTab(project.urlGithub)}
                  className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-black hover:bg-gray-300 text-white hover:text-gray-950 dark:hover:text-black font-bold py-2 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none col-start-2 row-start-4"
                >
                  <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                  <GithubSvg />
                </button>
                <button
                  onClick={() => redirectToNewTab(project.url)}
                  className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-black hover:bg-gray-300 text-white hover:text-gray-950 dark:hover:text-black font-bold py-2 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none col-start-4 row-start-4"
                >
                  <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                  <ExternalSvg />
                </button>
              </div>
              <h2 className="text-xl text-center sm:text-2xl col-start-2 row-start-5 text-light-accent-100">
                {languageData.technologies}
              </h2>
              <ul className="col-start-2 row-start-6 grid grid-flow-col gap-6">
                {Object.entries(project.tech).map(([tech]) => (
                  <li
                    className="w-full sm:w-auto max-w-28 max-h-28 flex flex-col justify-between items-center mx-auto p-0"
                    key={tech}
                  >
                    <div className="w-12 h-8">
                    {svgs[tech] ? React.createElement(svgs[tech]) : null}
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={prevProject}
                className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-black hover:bg-gray-300 text-white hover:text-gray-950 dark:hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none row-start-4"
              >
                <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                <ArrowLeftSvg />
              </button>
              <button
                onClick={nextProject}
                className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-black hover:bg-gray-300 text-white hover:text-gray-950 dark:hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none col-start-3 row-start-4"
              >
                <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                <ArrowRigthSvg />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
