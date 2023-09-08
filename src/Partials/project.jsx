import React from 'react';
import { Circle, MyImage } from '../Components/mycomponent';

function project({ title, projdate }) {
    return (
        <div className='item'>
            <MyImage date={projdate} bg="yes"/>
            <div className="project-title">
                <h2>{ title }</h2>
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
