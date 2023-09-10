import React from 'react';
import { Circle, MyImage } from '../Components/mycomponent';

function project({ title, projdate, imageUrl }) {
    return (
        <div className='item'>
            <MyImage image={imageUrl} date={projdate} bg="yes"/>
            <div className="project-title">
                <h3>{ title }</h3>
                <div className='icons'>
                    <Circle />
                    <Circle />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    )
}

export default project;
