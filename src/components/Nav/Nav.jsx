import React, { useState } from 'react';
import classNames from 'classnames';
import './nav.css'

export default function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const  cV = 'cv.pdf'

    return (
        <header className='My-header'>
            <div className="logo">

            </div>
            <div className={classNames('menu', { 'open': isMenuOpen })}>
                <nav className="navigation">

                    <ul>
                        <li><a href="#hero" className='land' onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#services" onClick={closeMenu}>Services</a></li>
                        <li><a href="#why" onClick={closeMenu}>Why Choose Me</a></li>
                        <li id='cont'><a href="#review" onClick={closeMenu}>Testimonials</a></li>
                    </ul>
                </nav>
            </div>

            <div className="btn">
                <button className="toggle-button" onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
            <div className="get">
            <a download={cV} href="/kathy/cv.pdf">Download Cv</a>
            </div>

        </header>
    );
}
