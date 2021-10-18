import React from 'react';

import analisis from '../../assets/img/analisis.png';
import datos from '../../assets/img/datos.png';

export const Services = () => {
    return (
        <div className='services__container' id='servicios'>
            <div className='services__content'>
                <div className='services__tittle'>
                    <h1>Nuestros Servicios</h1>
                </div>
                <div className='services__info'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi nam fames, conubia malesuada nascetur nec
                        sociosqu praesent etiam placerat quam primis, aliquam lacus auctor risus mattis ornare porttitor potenti
                        gravida.
                    </p>
                </div>
                <div className='services__info__card'>
                    <div className='services__card'>
                        <img
                            src={analisis}
                            alt='analisis'
                        />
                        <p>Consultoria de
                            <br />Gestión Comercial</p>
                    </div>
                    <div className='services__card'>
                        <img
                            src={datos}
                            alt='datos'
                        />
                        <p>Regulación
                            <br />Eléctrica</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
