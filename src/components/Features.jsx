import React from "react";
import projects from "../utils/projects.json";

const Features = () => {

    const redirectToNewTab = (url) => {
        window.open(url, '_blank')
    }

    return (
        <>
            <h2 className="center-title">Proyectos</h2>
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
                                        <h4 className="feature-title mt-24">{project.title}</h4>
                                        <p className="text-sm mb-0">{project.description}</p>
                                        <div className="btn-group">
                                            <button onClick={() => redirectToNewTab(project.url)}>GitHub 🚀</button>
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
