import React from 'react'

export const Form = () => {
    return (
        <form className='contact__form'>
                    <div className='form__item' >
                        <input name='name' id='name' type='text' placeholder='NOMBRE' />
                    </div>
                    <div className='form__item' >
                        <input name='email' id='email' type='email' placeholder='EMAIL' />
                    </div>
                    <div className='form__item' >
                        <input name='company' id='company' type='text' placeholder='COMPAÑIA' />
                    </div>
                    <div className='form__item' >
                        <input name='phone' id='phone' type='text' placeholder='TELEFONO' />
                    </div>
                    <div className='form__item' >
                        <textarea name='message' id='message' type='text' placeholder='MENSAJE' />
                    </div>
                    <div className='form__item'>
                        <input className='btn' type='submit' value='ENVIAR'/>
                    </div>
                </form>
    )
}
