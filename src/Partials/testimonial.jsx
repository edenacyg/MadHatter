import React from 'react';
import Circle from '../Components/circle';

function testimonial() {
    return (
        <div className='item'>
            <p>"</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <content>
                <div className='icons'>
                    <Circle />
                    <Circle />
                </div>
                <div className='texts'>
                    <h6>- Author</h6>
                    <p>Company</p>
                </div>
            </content>
            <p>"</p>
        </div>
    )
}

export default testimonial;
