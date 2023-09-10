import React from 'react';

function Circle() {
    return (
        <div className="circle">
        </div>
    );
}

function MyImage({ date, verticaltext, bg, animate, companyname, image }) {
    return (
        <div className='image-con'>
            {verticaltext ? <p className='lg-date'>{ verticaltext }</p> : null}
            {companyname ? <p className='companyname'><i class="fas fa-signature"></i>{ companyname }</p> : null}
            <img className={`${animate === 'yes' ? 'animate' : ''}`} src={ image } alt="" />
            <div className={`sm-date ${bg === 'yes' ? 'solidbg' : ''}`}>
                <h6>{date}</h6>
            </div>

        </div>
    );
}

export { Circle, MyImage };
