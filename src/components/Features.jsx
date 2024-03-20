import React, { useContext } from "react";
import projects from "../utils/projects.json";
import Lottie from "lottie-react";
import reactAnimate from "../utils/icons8-reaccionar.json";
import javascriptAnimate from "../utils/icons8-javascript.json";
import htmlAnimate from "../utils/html-5.json";
import cssAnimate from "../utils/css3-2.json";
import GithubSvg from "./svgs/GithubSvg";
import ExternalSvg from "./svgs/ExternalSvg";
import ArrowLeftSvg from "./svgs/ArrowLeftSvg";
import ArrowRigthSvg from "./svgs/ArrowRigthSvg";
import { LanguageContext, useLanguage } from "./subComponents/LanguageContext";

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

  const animations = {
    React: reactAnimate,
    JavaScript: javascriptAnimate,
    HTML: htmlAnimate,
    CSS: cssAnimate,
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-light-bg-100 via-oscure-bg-300/50 to-light-bg-100 dark:bg-gradient-to-r dark:from-oscure-bg-100 dark:via-light-text-200/70 dark:to-oscure-bg-100 text-oscure-bg-100 dark:text-light-bg-100 p-4 sm:p-6 md:p-8 flex flex-col justify-evenly items-center flex-wrap shadow-md shadow-oscure-primary-100"
    >
      <div className="flex flex-col flex-wrap justify-center items-center p-4 sm:p-6 md:p-8">
        <h2 className="text-light-accent-200 dark:text-oscure-primary-100">{languageData.projects}</h2>
        <p>
        {languageData.projectsDescription}
        </p>
      </div>
      <div className="">
        {projects.map((project) => (
          <div
            className="bg-gradient-to-r from-oscure-bg-300 via-light-bg-100/50 to-oscure-bg-300 dark:bg-gradient-to-r dark:from-light-text-200 dark:via-oscure-bg-100/80 dark:to-light-text-200 rounded-xl transition-all duration-300"
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
                className="w-3/5 col-start-2"
              />
              <h4 className="text-xl sm:text-2xl p-6 col-span-3 row-start-2 text-light-accent-100">
                {project.title}
              </h4>
              <p className="text-sm sm:text-base text-center p-4 col-span-3 row-start-3 w-6/12">
                {language === "es" ? project.descriptionT : project.description}
              </p>
              <div className="col-start-2 row-start-4 grid gap-4">
                <button
                  onClick={() => redirectToNewTab(project.urlGithub)}
                  className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none col-start-2 row-start-4"
                >
                  <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                  <GithubSvg />
                </button>
                <button
                  onClick={() => redirectToNewTab(project.url)}
                  className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none col-start-4 row-start-4"
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
                    <Lottie animationData={animations[tech]} className="w-12" />{" "}
                    {tech}
                  </li>
                ))}
              </ul>
                <button
                  onClick={prevProject}
                  className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none row-start-4"
                >
                  <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                  <ArrowLeftSvg />
                </button>
                <button
                  onClick={nextProject}
                  className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none col-start-3 row-start-4"
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
