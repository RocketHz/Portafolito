import React from 'react'

const Header = () => {
    return (
        <div className="body-wrap">
            <header className="site-header">
                <div className="header-container">
                    <div>
                        <h1>🚀 Rocket Hz</h1>
                    </div>
                    <ul className="header-link">
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#about">About me</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header