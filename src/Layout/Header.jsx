import React from 'react'

function Header() {
    return (
        <header>
            <div className='logo-container'>
                <h6>The mad hatter</h6>
            </div>
            
            <nav>
                <a className='active' href="/" c>Home</a>
                <a href="/">About</a>
                <a href="/">Design</a>
                <a href="/">Project</a>
                <a href="/">Shop</a>
            </nav>
        </header>
    )
}

export default Header
