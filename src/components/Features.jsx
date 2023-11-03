import React from "react";
import projects from "../utils/projects.json";
import Lottie from "lottie-react";
import reactAnimate from "../utils/icons8-reaccionar.json";
import javascriptAnimate from "../utils/icons8-javascript.json";
import htmlAnimate from "../utils/html-5.json";
import cssAnimate from "../utils/css3-2.json";

const Features = () => {
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
    <>
      <section
        id="projects"
        className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row justify-evenly items-center flex-wrap max-w-full"
      >
        <div className="flex flex-col flex-wrap justify-center items-center p-4 sm:p-6 md:p-8">
          <h2>Proyectos</h2>
          <p>
            Apartir de aca veras mis proyectos realizados a lo largo de mi vida
            como programador
          </p>
        </div>
        <div className="flex flex-col flex-wrap max-w-full justify-evenly items-center">
          {projects.map((project) => (
            <div
              className="flex flex-col sm:flex-row bg-gradient-to-r from-gulf-blue-900 via-blue-800 to-gulf-blue-700 rounded-xl transition-all duration-300 max-w-full flex-wrap"
              key={project.id}
              style={{
                display:
                  project.id === projects[currentProject].id ? "flex" : "none",
              }}
            >
              <div className="h-full flex flex-wrap bg-gulf-blue-900 bg-opacity-87 rounded-lg transition-all duration-200 justify-around items-center max-w-full gap-3 p-6">
                <img src={project.image} alt="Feature 01" className="max-w-full"/>
                <div className="flex flex-col justify-evenly items-center">
                  <h4 className="text-xl sm:text-2xl p-6">{project.title}</h4>
                  <p className="text-sm sm:text-base text-center p-4">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => redirectToNewTab(project.urlGithub)}
                      className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"
                    >
                      <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                      <svg
                        className="relative h-8 w-8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                      </svg>
                    </button>
                    <button
                      onClick={() => redirectToNewTab(project.url)}
                      className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"
                    >
                      <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                      <svg
                        className="relative h-8 w-8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />{" "}
                        <line x1="10" y1="14" x2="20" y2="4" />{" "}
                        <polyline points="15 4 20 4 20 9" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-col space-y-4 justify-around">
                  <h2 className="text-xl text-center sm:text-2xl">Tecnologias</h2>
                  <ul className="flex flex-wrap">
                    {Object.entries(project.tech).map(([tech]) => (
                      <li
                        className="w-full sm:w-auto max-w-28 max-h-28 flex flex-col justify-between items-center mx-auto p-0"
                        key={tech}
                      >
                        <Lottie
                          animationData={animations[tech]}
                          className="w-12"
                        />{" "}
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prevProject}
                    className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"
                  >
                    <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                    <svg
                      className="relative h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextProject}
                    className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"
                  >
                    <span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                    <svg
                      className="relative h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
