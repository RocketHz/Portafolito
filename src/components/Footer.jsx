import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
            <div className="container">
                <div className="site-footer-inner">
                    <div className="brand footer-brand">
                        <h2>🚀</h2>
                    </div>
                    <ul className="footer-links list-reset">
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#about">About me</a>
                        </li>
                    </ul>
                    <div className="footer-copyright">&copy; 2023 Rocket Hz, all rights reserved</div>
                </div>
            </div>
        </footer>
  )
}

export default Footer