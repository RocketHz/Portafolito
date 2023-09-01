import React from "react";
import projects from "../utils/projects.json";

const Features = () => {
    return (
        <>
            <h2 className="center-title">Proyectos</h2>
            <section id="projects" className="features section">
                <div className="container">
                    <div className="features-inner section-inner has-bottom-divider">
                        <div className="features-wrap">
                            {projects.map((project) => (
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner" key={project.id}>
                                        <div className="feature-icon">
                                            <img src="/feature-icon-01.svg" alt="Feature 01" />
                                        </div>
                                        <h4 className="feature-title mt-24">{project.title}</h4>
                                        <p className="text-sm mb-0">{project.description}</p>
                                        <button>Visit 🚀</button>
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
