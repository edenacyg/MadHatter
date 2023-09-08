import React from 'react';

function Circle() {
    return (
        <div className="circle">
        </div>
    );
}

function MyImage({ date, verticaltext, bg, animate, companyname }) {
    return (
        <div className='image-con'>
            {verticaltext ? <p className='lg-date'>{ verticaltext }</p> : null}
            {companyname ? <p className='companyname'>{ companyname }</p> : null}
            <img className={`${animate === 'yes' ? 'animate' : ''}`} src="./images/hero-image.png" alt="" />
            <div className={`sm-date ${bg === 'yes' ? 'solidbg' : ''}`}>
                <h6>{date}</h6>
            </div>

        </div>
    );
}

export { Circle, MyImage };
