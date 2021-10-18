import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator'

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

import logo from '../../assets/img/logo-meir.png';
import { setError, unsetError } from '../../actions/ui';

export const LoginModal = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
    const {loading} = useSelector(state => state.ui);  

   

    const [formValues, handleInputChange] = useForm({
        email: 'admin@meir.cl',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            console.log('Formulario correcto');
        }

        dispatch(startLogin(email, password))

    }

    const isFormValid = () => {
        if ((email.trim().length === 0) || (password.trim().length === 0)) {
            dispatch(setError('Email and password is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is invalid'))
        }

        dispatch(unsetError())
        return true;
    }

    return (
        <div>
            <div className='py-3 d-inline-flex row justify-content-center'>
                <h1 className='modal__tittle col-6'>Acceder</h1>
                <img
                    src={logo}
                    alt='logo meir'
                    className='h-auto col-4'
                />
            </div>
            <form onSubmit={handleLogin}>
                <div className="px-md-4 p-3 item__form">
                    <div className='mb-2 ps-2 d-inline-flex'>
                        <i className="fas fa-user-alt pe-3"></i>
                        <p>Usuario</p>
                    </div>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        name='email'
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="px-md-4 p-3 item__form">
                    <div className='mb-2 ps-2 d-inline-flex'>
                        <i className="fas fa-key pe-3"></i>
                        <p>Contraseña</p>
                    </div>
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        name='password'
                        autoComplete='off'
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='mx-md-4 mx-3 item__form text-center'>
                    <button
                        className='btn btn-lg w-100 my-3'
                        type='submit'
                        disabled={loading}
                    >
                        LOGIN
                    </button>
                    <Link to='/'>
                        <p>¿Olvido su Usuario o Contraseña?</p>
                    </Link>
                </div>
                {
                    msgError &&
                    <div>
                        {msgError}
                    </div>
                }
            </form>
        </div>
    )
}
