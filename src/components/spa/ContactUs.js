import React from 'react';


import logo from '../../assets/img/logo-meir.png'
import { Form } from './Form';




export const ContactUs = () => {
    return (
        <div id='contacto' className='contact__container'>
            <div className='contact__content'>
                <div className='contact__tittle'>
                    <h1 className=''>Contactenos</h1>
                </div>
                <Form />
            </div>
            <div className='contact__aside'>
                <div className='contact__subtittle'>
                    <div>
                        <img src={logo} alt='logo meir' />
                    </div>
                </div>
                <div className='contact__info'>
                    <div className=''>
                        <h3>NUESTROS CANALES DE COMUNICACION</h3>
                    </div>
                    <div className='contact__item'>
                        <i className="far fa-envelope" />
                        <p className=''>info@meir.cl</p>
                    </div>
                    <div className='contact__item'>
                        <i className="fas fa-phone-alt" />
                        <p className='col-8'>22 555 55 55</p>
                    </div>
                    <div className='contact__item'>
                        <i className="fab fa-whatsapp" />
                        <p className='col-8'>+56 9 9999 9999</p>
                    </div>
                    <div className='contact__item'>
                        <i className="fas fa-globe" />
                        <p className='col-8'>LINKS</p>
                    </div>
                    <div className='contact__links'>
                        <div>
                            <a href='home' >Link 1</a>
                            <a href='home' >Link 2</a>
                            <a href='home' >Link 3</a>
                        </div>
                        <div>
                            <a href='home' >Link 4</a>
                            <a href='home' >Link 5</a>
                            <a href='home' >Link 6</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
