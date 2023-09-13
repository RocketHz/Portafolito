import React from 'react'

const Header = () => {
    return (
        <div className="body-wrap scrolled">
            <header className="site-header">
                <div className="header-container">
                    <div>
                        <h1>🚀 RocketHz</h1>
                    </div>
                    <ul className="header-link">
                        <li>
                            <a href="#projects">
                                <button className="btn">
                                    Projects
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <button className="btn">
                                    About me
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header