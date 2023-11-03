import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-full text-sm mt-4 bg-gulf-blue-800 rounded">
            <div className="flex justify-center items-center">
                <div className="relative p-5">
                    <div className="max-w-full flex items-center justify-center">
                        <h2><svg className="h-16 w-16 text-gulf-blue-950"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />  <circle cx="15" cy="9" r="1"  /></svg></h2>
                    </div>
                    <ul className="flex justify-center items-center gap-5 p-6">
                        <li>
                            <a href="#projects">
                                <button className="relative p-2 border border-gulf-blue-300 rounded text-sm uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-white hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                    <span className='relative'>Proyectos</span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <button className="relative p-2 border border-gulf-blue-300 rounded text-sm uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-white hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                    <span className='relative'>Conoceme</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright">&copy; 2023 Rocket Hz, all rights reserved</div>
                </div>
            </div>
        </footer>
  )
}

export default Footer