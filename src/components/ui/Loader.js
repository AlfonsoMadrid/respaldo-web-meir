import React from 'react';

import logo from '../../assets/img/logo-meir.png';

export const Loader = () => {
    return (
        <div className='loader__container'>
        <div className='d-block'>
            <img
                src={logo}
                alt='logo meir'
                className='w-50 animate__animated animate__fadeIn'
            />
            </div>
        <div className='d-block'>
            <div className="lds-ellipsis">
                
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </div>
        </div>
        
    )
}
