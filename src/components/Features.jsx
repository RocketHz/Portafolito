import React from "react";
import projects from "../utils/projects.json";

const Features = () => {

    const redirectToNewTab = (url) => {
        window.open(url, '_blank')
    }

    return (
        <>
            <h2 className="center-title">Proyectos</h2>
            <p className="center-title">Apartir de aca veras mis proyectos realizados a lo largo de mi vida como programador</p>
            <section id="projects" className="features section">
                <div className="container">
                    <div className="features-inner section-inner has-bottom-divider">
                        <div className="features-wrap ">
                            {projects.map((project) => (
                                <div className="feature text-center is-revealing card-project ">
                                    <div className="feature-inner card2" key={project.id}>
                                        <div className="feature-icon">
                                            <img src={project.image} alt="Feature 01" className=""/>
                                        </div>
                                        <h4 className="feature-title">{project.title}</h4>
                                        <p className="text-sm">{project.description}</p>
                                        <div className="btn-group">
                                            <button onClick={() => redirectToNewTab(project.urlGithub)}>GitHub 🚀</button>
                                            <button onClick={() => redirectToNewTab(project.url)}>Visit 🚀</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
