import React from 'react'

const Header = () => {
   return (
       <div className="sticky top-0 z-10 h-full max-w-screen-2xl rounded-lg px-4 sm:px-6 md:px-8 bg-gulf-blue-700 flex justify-around">
           <header className='flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4'>
                  <div>
                      <h1 className='text-2xl sm:text-3xl bg-gradient-to-r from-gulf-blue-950 to-purple-900 bg-clip-text text-transparent flex items-center gap-1'><svg className="h-16 w-16 sm:h-20 sm:w-20 text-gulf-blue-950" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /> <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /> <circle cx="15" cy="9" r="1" /></svg> RocketHz</h1>
                  </div>
                  <ul className="flex flex-col sm:flex-row gap-5">
                      <li>
                          <a href="#projects">
                              <button className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-white hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                 <span className='relative'>Proyectos</span>
                              </button>
                          </a>
                      </li>
                      <li>
                          <a href="#about">
                              <button className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-white hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                 <span className='relative'>Conoceme</span>
                              </button>
                          </a>
                      </li>
                      <li>
                          <a href="#contact">
                              <button className="relative p-2 border border-gulf-blue-300 rounded text-sm sm:text-base uppercase bg-gulf-blue-900 hover:bg-gulf-blue-600 text-white hover:text-black font-bold py-2 px-4 shadow-md hover:shadow-gulf-blue-300 transition-all duration-200 ease-out hover:animate-sh02 active:shadow-none"><span className="absolute inset-0 rounded bg-gulf-blue-600 opacity-0 transform hover:opacity-100"></span>
                                 <span className='relative'>Contactame</span>
                              </button>
                          </a>
                      </li>
                  </ul>
           </header>
       </div>
   )
}

export default Header
