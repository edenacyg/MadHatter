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
                <a href="/">Solutions</a>
                <a href="/">Contact Us</a>
            </nav>
        </header>
    )
}

export default Header
