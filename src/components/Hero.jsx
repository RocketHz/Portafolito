import React from "react";

const Hero = () => {
    return (
        <>
            <section id='about' className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <h1 className="hero-title mt-0">Ronni Hernandez</h1>
                            <p className="hero-paragraph">
                                Desarrollador Web FullStack con mas de 5 años de experiencia 💪 trabajando en una variedad de proyectos personales, desde sitios web de comercio electronico hasta aplicaciones web interactivas.
                            </p>
                            <p className="hero-paragraph">
                                Me motiva la oportunidad de utilizar la tecnologia para resolver problemas complejos y crear experiencias digitales que hagan la vida mas facil y agradable para los usuarios.
                            </p>
                            <p className="hero-paragraph">
                                Actualmente me encuentro con muchas ganas de trabajar con React.js y en la medida de lo posible estare subiendo los proyectos que realice a mi portafolio.
                            </p>
                            <div className="hero-cta">
                                <button className="button button-primary">
                                    Github
                                </button>
                                <button className="button">
                                    Linkedin
                                </button>
                            </div>
                        </div>
                        <div className="hero-copy">
                            <h2 className="mark">Aqui va una foto super cool</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
