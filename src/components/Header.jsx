import React from 'react'

const Header = () => {
    return (
        <div className="container__wrap scrolled">
            <header className='header__container'>
                    <div>
                        <h1>🚀 RocketHz</h1>
                    </div>
                    <ul className="header__link">
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
            </header>
        </div>
    )
}

export default Header