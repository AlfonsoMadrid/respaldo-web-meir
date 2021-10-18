import React from 'react';

import logo from '../../assets/img/logo-meir.png'
// import { Login } from '../auth/Login';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    <img
                        src={logo}
                        style={{ hight: '100vh', minWidth: '6rem', maxWidth: '10vw' }}
                        className='d-inline-block align-text-top margin_right'
                        alt='logo-meir'
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mt-3 ms-xs-5">
                        <a className="nav-link ms-sm-5" href="#nosotros">NOSOTROS</a>
                        <a className="nav-link ms-sm-5" href="#servicios">SERVICIOS</a>
                        <a className="nav-link ms-sm-5" href="#informe">INFORME ELECTRICO</a>
                        <a className="nav-link ms-sm-5" href="#contacto">CONTACTO</a>
                    </div>
                    {/* <Login /> */}
                    {/* Este login no estara disponible momentaneamente */}
                </div>
            </div>
        </nav>
    )
}
