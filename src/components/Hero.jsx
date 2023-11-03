import React from "react";

const Hero = () => {
    return (
        <>
            <section id="about" className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-evenly flex-wrap gap-5 bg-gulf-blue-950 rounded-3xl p-4 sm:p-6 md:p-8">
                    <div className="max-w-full sm:max-w-md">
                        <h2 className="text-center text-xl sm:text-2xl font-bold ">Ronni Hernandez</h2>
                        <p className="text-center">
                            Desarrollador Web FullStack apasionado por la creación de proyectos personales que revolucionan la forma en que interactúan las personas con la tecnología.He trabajado en una amplia variedad de proyectos, desde sitios web de comercio electrónico hasta aplicaciones web interactivas. Mi enfoque en la programación full stack me permite abordar tanto aspectos del front-end como del back-end, lo que me brinda una visión completa del proceso de desarrollo. Además, me apasiona la tecnología y la resolución de problemas complejos, lo que me motiva a seguir explorando nuevas herramientas y tecnologías para mejorar mis habilidades y ofrecer soluciones innovadoras a mis proyectos.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                            <a href="http://github.com/RocketHz" target="_blank" rel="noopener noreferrer">
                                <button className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                    <svg className="relative h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                                </button>
                            </a>
                            <a href="http://www.linkedin.com/in/ronni-hernandez-a9b3301b9" target="_blank" rel="noopener noreferrer">
                                <button className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                    <svg className="relative h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                                </button>
                            </a>
                            <a href="/CV_RonniHernandez_FullStackSoftwareDeveloper.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-gulf-blue-100 hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                    <svg className="relative h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="6" y1="16" x2="6" y2="18" />  <line x1="10" y1="16" x2="10" y2="22" />  <line x1="14" y1="16" x2="14" y2="18" />  <line x1="18" y1="16" x2="18" y2="20" /></svg>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full sm:w-auto">
                        <img className="m-4 max-h-96 rounded-lg shadow-outline" src="/profile8.jpg" alt="Foto de Perfil" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;