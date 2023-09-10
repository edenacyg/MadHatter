import React from 'react';
import { Circle } from '../Components/mycomponent';

function testimonial() {
    return (
        <div className='item'>
            <i class="fas fa-quote-left"></i>
            <blockquote>
                <p>Quality digital products and platforms require in-depth study and research. With these, the company realizes innovative and appropriate application of project solutions to produce outstanding outputs that  the achieve the</p>
                <div className='author'>
                    <div className='icons'>
                        <Circle />
                        <Circle />
                    </div>
                    <div className='texts'>
                        <h6>-Rica nypps</h6>
                        <p>&nbsp;&nbsp;Company Co.</p>
                    </div>
                </div>
            </blockquote>
            <i class="fas fa-quote-right"></i>
        </div>
    )
}

export default testimonial;
