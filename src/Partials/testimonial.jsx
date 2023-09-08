import React from 'react';
import { Circle } from '../Components/mycomponent';

function testimonial() {
    return (
        <div className='item'>
            <i class="fas fa-quote-left"></i>
            <blockquote>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className='author'>
                    <div className='icons'>
                        <Circle />
                        <Circle />
                    </div>
                    <div className='texts'>
                        <h6>-Author</h6>
                        <p>Company.Co</p>
                    </div>
                </div>
            </blockquote>
            <i class="fas fa-quote-right"></i>
        </div>
    )
}

export default testimonial;
