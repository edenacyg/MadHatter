import React from 'react';
import Circle from '../Components/circle';

function project() {
    return (
        <div className='item'>
            <img src="./images/hero-image.png" alt="" />
            <div className="project-title">
                <h2>Project - 001</h2>
                <div className='icons'>
                    <Circle />
                    <Circle />
                </div>
            </div>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default project;
