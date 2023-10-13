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

    return (
        <>
            <section id="projects" className="project-container">
                <div className="project-title">
                    <h2 className="center-title">Proyectos</h2>
                    <p className="center-title">
                        Apartir de aca veras mis proyectos realizados a lo largo de mi vida
                        como programador
                    </p>
                </div>
                <div className="features-wrap ">
                    {projects.map((project, index) => (
                        <div
                            className="card-project "
                            key={project.id}
                            style={{ display: index === currentProject ? "block" : "none" }}
                        >
                            <div className="card2">
                                <img src={project.image} alt="Feature 01" />
                                <h4 className="feature-title">{project.title}</h4>
                                <p className="text-sm">{project.description}</p>
                                <div className="btn-group">
                                    <button onClick={() => redirectToNewTab(project.urlGithub)}>
                                        GitHub 🚀
                                    </button>
                                    <button onClick={() => redirectToNewTab(project.url)}>
                                        Visit 🚀
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="carousel">
                        <h2 className="center-title">Tecnologias</h2>
                        <ul className="technologies">
                            <li>
                                <Lottie animationData={reactAnimate} /> ReactJS
                            </li>
                            <li>
                                <Lottie animationData={javascriptAnimate} /> JavaScript
                            </li>
                            <li>
                                <Lottie animationData={htmlAnimate} /> HTML
                            </li>
                            <li><Lottie animationData={cssAnimate} /> CSS </li>
                        </ul>
                        <button onClick={nextProject}>Siguiente</button>
                        <button onClick={prevProject}>Anterior</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
