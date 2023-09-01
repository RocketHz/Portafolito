import React from 'react'

const Header = () => {
  return (
    <div className="body-wrap">
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            🚀 Rocket Hz
                        </h1>
                    </div>
                    <div className="brand header-brand">
                        <ul className="header-link list-reset">
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#about">About us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header