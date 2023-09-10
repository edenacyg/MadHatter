import React from 'react';

function menu({ title, menus }) {
    return (
        <div className='category'>
            <h6>{title}</h6>
            <nav>
                {menus.map((menu, index) => (
                    <a key={index} href='/'>
                        {menu.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default menu;
