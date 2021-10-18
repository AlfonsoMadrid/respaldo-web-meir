import React from 'react';

import sky from '../../assets/img/sky_fields.jpeg';
import pylon from '../../assets/img/pylon.jpeg';
import light from '../../assets/img/light_bulb.jpeg';
import { Banner } from './Banner';



export const Carousel = () => {

    let counter = 1;
    
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if ( counter > 3){
            counter = 1;
        }
    }, 6000);



    return (
        <div className='carrousel__slider'>
            <div className='carousel__slides'>
                <input type='radio' name='radio-btn' id='radio1' />
                <input type='radio' name='radio-btn' id='radio2' />
                <input type='radio' name='radio-btn' id='radio3' />
                <div className='carousel__slide slide__first'>
                    <img src={sky} alt='sky'/>
                </div>
                <div className='carousel__slide'>
                    <img src={pylon} alt='power'/>
                </div>
                <div className='carousel__slide'>
                    <img src={light} alt='light'/>
                </div>
                <Banner />
                <div className='carousel__auto__navigation'>
                    <div className='auto__btn1'></div>
                    <div className='auto__btn2'></div>
                    <div className='auto__btn3'></div>
                </div>
                <div className='carousel__manual__navigation'>
                    <label htmlFor='radio1' className='manual__btn'></label>
                    <label htmlFor='radio2' className='manual__btn'></label>
                    <label htmlFor='radio3' className='manual__btn'></label>
                </div>
            </div>


            
        </div>
    )
}
