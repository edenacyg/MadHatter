import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header>
            <div className="header-content">
                <div className='logo-con'>
                    <i class="fas fa-signature"></i>
                    <h6>The mad hatter*</h6>
                </div>

                <nav className='menu'>
                    <a className='active' href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Design</a>
                    <a href="/">Project</a>
                    <a href="/">Shop</a>
                </nav>

                <div className="menubar" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <nav className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
            <i className="fas fa-times" onClick={toggleMenu}></i>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Design</a>
                <a href="/">Project</a>
                <a href="/">Shop</a>
            </nav>
        </header>
    )
}

export default Header;
